export  const getJsonLd = (dataStructure?: string) => {
    if (!dataStructure) return null;
    try {
      const parsedData = JSON.parse(dataStructure);

      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: parsedData["video-title"],
        description: parsedData["video-description"],
        contentUrl: parsedData["video-link"],
        embedUrl: parsedData["video-link"],
        thumbnailUrl: parsedData["poster-link"],
        uploadDate: parsedData["video-created"],
        duration: parsedData["video-duration"],
      });
    } catch {
      
      return null;
    }
  };