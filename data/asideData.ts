interface asideDataProps {
  id: number;
  name: string;
  urlPath: string;
  svgPath: string;
}


export const asideData: asideDataProps[] = [
  {
    id: 0,
    name: "Dashboard",
    urlPath: "/",
    svgPath:
      "M6 26h16V6H6v20zm0 16h16V30H6v12zm20 0h16V22H26v20zm0-36v12h16V6H26z",
  },
  {
    id: 1,
    name: "Bids",
    urlPath: "/bids",
    svgPath:
      "M64.88 39.06L43.43 28.84a2 2 0 0 0-2.68.92l-.32.65-3.16-1.54a55.74 55.74 0 0 1 3.19-5.37l1.17.57a1.68 1.68 0 0 0 .78.18 1.79 1.79 0 0 0 1.61-1l1.32-2.69a1.8 1.8 0 0 0-.83-2.4h0L27.64 9.93a1.77 1.77 0 0 0-2.39.82l-1.32 2.69a1.8 1.8 0 0 0 .83 2.4l1.29.63a49.28 49.28 0 0 1-6.56 13.59l-1.35-.66a1.79 1.79 0 0 0-2.4.82l-1.31 2.69a1.81 1.81 0 0 0 .82 2.4l16.88 8.23a1.68 1.68 0 0 0 .78.18 1.8 1.8 0 0 0 1.61-1L35.84 40a1.86 1.86 0 0 0 .08-1.37 1.81 1.81 0 0 0-.91-1h0L33.78 37A56.65 56.65 0 0 1 36.23 31l.14-.3 3.19 1.55L39 33.39a2 2 0 0 0 .93 2.68L61.35 46.29a1.94 1.94 0 0 0 .87.2A2 2 0 0 0 64 45.37l1.78-3.63A2 2 0 0 0 64.88 39.06zM27 11.82l16.5 8.05-1.13 2.31-16.5-8zm5.87 29.83l-16.5-8 1.13-2.31L34 39.34zM32 36.15L21.3 30.94a51.31 51.31 0 0 0 6.57-13.58l10.78 5.26a58.11 58.11 0 0 0-3.16 5.32c-.35.67-.71 1.4-1.07 2.16A59.94 59.94 0 0 0 32 36.15zm30.26 8.34L40.78 34.27l1.78-3.63L64 40.86zM44.47 56.58V52.44a1.68 1.68 0 0 0-1.68-1.68H41V49.49a3.33 3.33 0 0 0-3.33-3.32H8.82a3.33 3.33 0 0 0-3.33 3.32v1.27H3.68A1.68 1.68 0 0 0 2 52.44v4.14a1.68 1.68 0 0 0 1.68 1.67H42.79A1.68 1.68 0 0 0 44.47 56.58zm-37-7.09a1.33 1.33 0 0 1 1.33-1.32H37.65A1.33 1.33 0 0 1 39 49.49v1.27H7.49zm35 6.76H4V52.76H42.47z",
  },
  {
    id: 2,
    name: "Liked",
    urlPath: "/liked",
    svgPath:
      "M56,12.34a14,14,0,0,0-19.8,0L32,16.58l-4.24-4.24A14,14,0,0,0,8,32.14L31.29,55.47a1,1,0,0,0,1.41,0L56,32.14A14,14,0,0,0,56,12.34ZM54.63,30.72,32,53.35,9.37,30.72a12,12,0,0,1,17-17l5,5a1,1,0,0,0,1.41,0l5-5a12,12,0,0,1,17,17Z",
  },
  {
    id: 3,
    name: "Collection",
    urlPath: "/collection",
    svgPath:
      "M123 70.999997a1 1 0 00-1 1 1 1 0 001 1h10a1 1 0 001-1 1 1 0 00-1-1zM123 67a1 1 0 00-1 1 1 1 0 001 1h10a1 1 0 001-1 1 1 0 00-1-1zM123 74.999997a1 1 0 00-1 1 1 1 0 001 1h10a1 1 0 001-1 1 1 0 00-1-1z",
  },
  {
    id: 4,
    name: "Profile",
    urlPath: "/profile",
    svgPath:
      "M134 2009c-2.217 0-4.019-1.794-4.019-4s1.802-4 4.019-4 4.019 1.794 4.019 4-1.802 4-4.019 4m3.776.673a5.978 5.978 0 0 0 2.182-5.603c-.397-2.623-2.589-4.722-5.236-5.028-3.652-.423-6.75 2.407-6.75 5.958 0 1.89.88 3.574 2.252 4.673-3.372 1.261-5.834 4.222-6.22 8.218a1.012 1.012 0 0 0 1.004 1.109.99.99 0 0 0 .993-.891c.403-4.463 3.836-7.109 7.999-7.109s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.596 0 1.06-.518 1.003-1.109-.385-3.996-2.847-6.957-6.22-8.218",
  },
  {
    id: 5,
    name: "Settings",
    urlPath: "/settings",
    svgPath:
      "m59.36 35.54-3 4.06 4.44 5 4.39-2.47A16.58 16.58 0 0 0 69 44l.75 5 6.7.4 1.34-4.84a16.26 16.26 0 0 0 4-1.37l4 3 5-4.45-2.48-4.37a15.43 15.43 0 0 0 1.85-3.81l5-.74.41-6.69-4.85-1.35a16 16 0 0 0-1.37-4l3-4.05-4.44-5-4.39 2.47a16.58 16.58 0 0 0-3.79-1.84l-.75-5-6.7-.41L71 11.77a16.26 16.26 0 0 0-4 1.37l-4-3-5 4.44L60.37 19a16.14 16.14 0 0 0-1.86 3.8l-5 .74-.41 6.7 4.9 1.33a16 16 0 0 0 1.36 3.97zm8.24-15a10.21 10.21 0 1 1-.89 14.42 10.21 10.21 0 0 1 .89-14.45zM8.63 80.32l6.85-1.1a22.36 22.36 0 0 0 4 4.19l-1.42 6.8 8.45 3.73 4.06-5.62a23 23 0 0 0 5.8.13l3.82 5.8 8.61-3.34-1.1-6.84a22 22 0 0 0 4.23-4l6.76 1.42L62.43 73l-5.62-4a21.52 21.52 0 0 0 .19-5.86l5.79-3.79-3.33-8.62-6.84 1.1a22.87 22.87 0 0 0-4-4.21L50 40.83l-8.49-3.73-4.06 5.62a22.58 22.58 0 0 0-5.8-.12l-3.81-5.81-8.62 3.35 1.1 6.86a22.21 22.21 0 0 0-4.21 4l-6.78-1.43L5.6 58l5.62 4a21.94 21.94 0 0 0-.14 5.83l-5.79 3.86zm12.52-20.47a14.07 14.07 0 1 1 7.19 18.55 14.07 14.07 0 0 1-7.19-18.55z",
  },
];

