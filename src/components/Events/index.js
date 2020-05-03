
let isMobile = window.innerWidth < 780;

export const checkMobile = () => isMobile;
export const changeMobile = (flag) => (isMobile = flag);
