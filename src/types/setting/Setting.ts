export interface ISettingApi {
  data: ISettingData
}

export interface ISettingData {
  message: string
  status: boolean
  content: Content
  meta: Meta
  statusControl: StatusControl
  extra: IExtraSettings
}

export interface Content {
  logo: Logo
  logoAlt: string
  siteName: string
}

export interface Logo {
  indexArray: IndexArray
  indexWeb: IndexWeb
  directory: string
  currentImage: string
}

export interface IndexArray {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface Meta {
  dataStructure: DataStructure
  title: string
  description: string
  keywords: string
  generator: string
  author: string
  themeColor: string
  siteLang: string
  favIco: unknown
  favIcoAlt: unknown
  webApp: unknown
  webAppAlt: unknown
}

export interface DataStructure {
  sameAs: unknown[]
  localBusiness: LocalBusiness
  organization: string
}

export interface LocalBusiness {
  "@context": string
  "@type": string
  name: string
  image: string
  url: string
  telephone: string
  address: Address
  geo: Geo
  openingHoursSpecification: OpeningHoursSpecification
  sameAs: unknown[]
}

export interface Address {
  "@type": string
  streetAddress: string
  addressLocality: string
  postalCode: string
  addressCountry: string
}

export interface Geo {
  "@type": string
  latitude: number
  longitude: number
}

export interface OpeningHoursSpecification {
  "@type": string
  dayOfWeek: string[]
  opens: string
  closes: string
}

export interface StatusControl {
  status: number
  isAllowed: boolean
}

export interface IExtraSettings {
  footer: Footer
  mainColor: string
  secondColor: string
  footerColor: string
  menus: Menus
  pages: Pages
  social: Social
}

export interface Footer {
  copyRight: string
  aboutUs: string
  aboutUsMobile: string
}

export interface Menus {
  status: boolean
  message: string
  data: IMenuData[]
}

export interface IMenuData {
  id: number
  name: string
  slug: string
  extra: unknown[]
}

export interface Pages {
  status: boolean
  message: string
  data: unknown[]
}

export interface Social {
  status: boolean
  message: string
  data: Daum2[]
}

export interface Daum2 {
  id: number
  title: string
  image: Image
  imageAlt: string
  link: string
  extra: unknown[]
}

export interface Image {
  indexArray: IndexArray2
  indexWeb: IndexWeb2
  directory: string
  currentImage: string
}

export interface IndexArray2 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb2 {
  original: string
  double_ratio: string
  triple_ratio: string
}
