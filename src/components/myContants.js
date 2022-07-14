export const NUMBER_REGEX = /^[0-9]*$/;
export const PHONEVIET_REGEX = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
export const EMAIL_REREX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//Required
//Part1
export const REQUIRED = "Yêu cầu điền đầy đủ thông tin!";
export const NUMBER_AGE = "Năm sinh nhập bằng số !";
export const NUMBER_AGE_1900 = "Năm sinh phải lớn hơn 1900!";
export const SEX_VALID = "Yêu cầu chọn giới tính!";
export const CMND_VALID = "CMND chỉ được nhập số!";
export const CMND_VALID_MIN = "CMND chỉ được phép 9 số";
export const CMND_VALID_MAX = "CMND đã vượt 9 số";
//Part2
export const EMAIL_VALID = "Email không hợp lệ!";
export const PHONE_VALID = "Số điện thoại không hợp lệ";
