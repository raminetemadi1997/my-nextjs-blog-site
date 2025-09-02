"use client";
import {
  Star,
  Mail,
  UserCircle2,
  User,
  MailIcon,
  Type,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { ICommentApiResponse } from "@/types/Post/Comment";
import Published from "../Public/Published";

type FormState = {
  isOpen: boolean;
  comment: string;
  name: string;
  phone: string;
  title: string;
};

type ICommentProps = {
  postSlug: string;
};

export default function Comment({ postSlug }: ICommentProps) {
  const [data, setData] = useState<ICommentApiResponse | null>(null);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [loading, setLoading] = useState<{ like: number | null; dislike: number | null }>({
    like: null,
    dislike: null,
  });

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://test.dcakala.com/api/blog/comment/${postSlug}`
      );
      if (res.data?.status) {
        setData(res.data);
      }
    };
    getData();
  }, [trigger]);

  const [form, setForm] = useState<FormState>({
    isOpen: false,
    comment: "",
    name: "",
    phone: "",
    title: "",
  });

  const submitHandler = () => {
    axios.get("https://test.dcakala.com/sanctum/csrf-cookie");
    axios
      .post(`https://test.dcakala.com/api/blog/comment/${postSlug}`, {
        body: form.comment,
        name: form.name,
        mobile: form.phone,
        title: form.title,
      })
      .then((result) => {
        toast.success(result.data.message);
      })
      .catch((err) => {
        const errors = err.response?.data?.errors;
        const messages = [
          ...(errors?.body || []),
          ...(errors?.name || []),
          ...(errors?.mobile || []),
          ...(errors?.title || []),
        ];
        messages.forEach((msg) => {
          toast.error(msg);
        });
      });
  };

  const handleReaction = async (id: number, type: "like" | "dislike") => {
    setLoading((prev) => ({ ...prev, [type]: id }));
    try {
      await axios.get(`https://test.dcakala.com/api/blog/comment-${type}/${id}`);
      setTrigger((prev) => !prev);
    } finally {
      setLoading((prev) => ({ ...prev, [type]: null }));
    }
  };

  return (
    <section className="border-t border-border">
      <div className="flex justify-center items-center h-80 relative">
        <div className="border border-border border-dashed w-2/4"></div>
        <div className="flex items-center flex-col justify-center gap-2 bg-white absolute">
          <div className="w-14 h-14 rounded-full border border-border border-dashed z-10 text-[#7A7A7A] flex justify-center items-center">
            {data?.data.final_rate || 0}
          </div>
          <div className="text-[#7A7A7ACC] text-sm">امتیازدهی به مقاله</div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) =>
              data ? (
                <Star
                  key={i}
                  size={16}
                  fill={i < data?.data.final_rate ? "#FCD205" : "#E0E0E0"}
                  stroke={i < data?.data.final_rate ? "#FCD205" : "#E0E0E0"}
                />
              ) : (
                <Star key={i} size={16} fill="#E0E0E0" stroke="#E0E0E0" />
              )
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Mail size={16} color="#7A7A7A" />
          <div className="text-sm text-[#7A7A7A]">اشتراک گذاری</div>
        </div>

        <div className="p-5 h-80">
          <div className="flex gap-2">
            <UserCircle2 color="#D9D9D9" size={36} />
            <div className="w-full space-y-2">
              <textarea
                name=""
                id=""
                onClick={() => setForm((prev) => ({ ...prev, isOpen: true }))}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, comment: e.target.value }))
                }
                value={form.comment || ""}
                style={{
                  width: "100%",
                  minHeight: "120px",
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  outline: "none",
                  resize: "none",
                  backgroundColor: "#fff",
                }}
                placeholder="یک متن ساده..."
              />
              <AnimatePresence>
                {form.isOpen && (
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="origin-top w-full rounded-lg "
                  >
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="relative w-full">
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <User size={20} />
                          </span>
                          <input
                            type="text"
                            required
                            placeholder="نام و نام خانوادگی"
                            className="pr-10 pl-3 py-2 w-full rounded-lg border border-gray-300 focus:outline-none bg-white"
                            onChange={(e) =>
                              setForm((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            value={form.name || ""}
                          />
                        </div>

                        <div className="relative w-full">
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <MailIcon size={20} />
                          </span>
                          <input
                            pattern="[0-9]*"
                            type="tel"
                            required
                            placeholder="موبایل"
                            className="pr-10 pl-3 py-2 w-full rounded-lg border border-gray-300 focus:outline-none bg-white placeholder:text-right"
                            maxLength={11}
                            onChange={(e) => {
                              const onlyNumbers = e.target.value.replace(
                                /\D/g,
                                ""
                              );
                              setForm((prev) => ({
                                ...prev,
                                phone: onlyNumbers,
                              }));
                            }}
                            value={form.phone || ""}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="relative w-full">
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Type size={20} />
                          </span>
                          <input
                            type="text"
                            required
                            placeholder="عنوان"
                            className="pr-10 pl-3 py-2 w-full rounded-lg border border-gray-300 focus:outline-none bg-white"
                            onChange={(e) =>
                              setForm((prev) => ({
                                ...prev,
                                title: e.target.value,
                              }))
                            }
                            value={form.title || ""}
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          onClick={submitHandler}
                          className="text-sm px-6 py-2 rounded-md bg-[#07B290] text-white font-medium shadow-md active:scale-95 transition duration-200 h-fit cursor-pointer"
                        >
                          انتشار دیدگاه
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {data?.status && (
        <div>
          <div className="flex items-center gap-2 border-b border-border pb-2">
            <div className="text-sm text-[#7A7A7A] font-bold">
              {data?.data.comment_count || 0}
            </div>
            <div className="text-sm text-[#7A7A7A]">دیدگاه</div>
          </div>
          <div className="p-5 space-y-7">
            {data.data.comments.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="flex gap-2">
                  <UserCircle2 color="#D9D9D9" size={36} />
                  <div className="w-full space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-[#253A57]">{item.user_name}</div>
                      <Published persianDate={item.published} />
                    </div>
                    <div className="text-[#9C9C9CCC] text-justify">
                      {item.body}
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3 text-[#9C9C9CB2]">
                        <div
                          className="flex items-center gap-1 cursor-pointer"
                          onClick={() => handleReaction(item.id, "like")}
                        >
                          <ThumbsUp size={16} />
                          <div>
                            {loading.like === item.id ? "..." : item.like || 0}
                          </div>
                        </div>
                        <div
                          className="flex items-center gap-1 cursor-pointer"
                          onClick={() => handleReaction(item.id, "dislike")}
                        >
                          <ThumbsDown size={16} />
                          <div>
                            {loading.dislike  === item.id
                              ? "..."
                              : item.dislike || 0}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {item.answers.length > 0 &&  item.answers.map((answerItems) => (
                    <div key={answerItems.id} className="flex gap-2 pr-8">
                      <UserCircle2 color="#D9D9D9" size={36} />
                      <div className="w-full space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="text-[#253A57]">{answerItems.user_name}</div>
                          <Published persianDate={answerItems.published} />
                        </div>
                        <div className="text-sm text-[#9C9C9CCC]">پاسخ دادن به <span className="text-[#253A57]">{item.user_name}</span></div>
                        <div className="text-[#9C9C9CCC] text-justify">
                          {answerItems.body}
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-3 text-[#9C9C9CB2]">
                            <div
                              className="flex items-center gap-1 cursor-pointer"
                              onClick={() => handleReaction(item.id, "like")}
                            >
                              <ThumbsUp size={16} />
                              <div>
                                {loading.like === answerItems.id
                                  ? "..."
                                  : answerItems.like || 0}
                              </div>
                            </div>
                            <div
                              className="flex items-center gap-1 cursor-pointer"
                              onClick={() => handleReaction(item.id, "dislike")}
                            >
                              <ThumbsDown size={16} />
                              <div>
                                {loading.dislike === answerItems.id
                                  ? "..."
                                  : answerItems.dislike || 0}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <Toaster />
    </section>
  );
}
