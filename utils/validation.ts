export function isValidIMEI(imei: string) {
    const imeiTrimmed = imei.trim();
    const imeiRegex = /^[0-9]{15}$/;
    return imeiRegex.test(imeiTrimmed);
}