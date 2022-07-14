import React from "react";
import "../components/styles.css";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import {
  NUMBER_REGEX,
  PHONEVIET_REGEX,
  EMAIL_REREX,
  REQUIRED,
  NUMBER_AGE,
  NUMBER_AGE_1900,
  SEX_VALID,
  CMND_VALID,
  CMND_VALID_MIN,
  CMND_VALID_MAX,
  EMAIL_VALID,
  PHONE_VALID,
} from "./myContants.js";
const Form = () => {
  //State
  const symptom = [
    { id: "1", title: "Sốt" },
    { id: "2", title: "Ho" },
    { id: "3", title: "Khó thở" },
    { id: "4", title: "Viêm phổi" },
    { id: "5", title: "Đau họng" },
    { id: "6", title: "Mệt mõi" },
  ];
  const people = [
    { id: "1", title: "Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19" },
    { id: "2", title: "Nguời từ nước ngoài có bệnh COVID-19" },
    { id: "3", title: "Người có biểu hiện (Sốt, ho, khó thở,viêm phổi)" },
  ];
  return (
    <Formik
      initialValues={{
        // part1
        sex: "",
        name: "",
        age: "",
        cmnd: "",
        country: "",
        company: "",
        position: "",
        save: "chưa có",
        // part2
        city: "",
        district: "",
        ward: "",
        address: "",
        phone: "",
        email: "",
        //part3
        info: "",
        symptom: [],
        people: [],
      }}
      validationSchema={Yup.object({
        // PART1
        name: Yup.string().required(REQUIRED),
        age: Yup.number().typeError(NUMBER_AGE).required(REQUIRED),
        cmnd: Yup.string()
          .matches(NUMBER_REGEX, CMND_VALID)
          .min(9, CMND_VALID_MIN)
          .max(9, CMND_VALID_MAX)
          .required(REQUIRED),
        country: Yup.string().required(REQUIRED),
        company: Yup.string().required(REQUIRED),
        position: Yup.string().required(REQUIRED),
        sex: Yup.string().required(SEX_VALID),
        // PART2
        city: Yup.string().required(REQUIRED),
        district: Yup.string().required(REQUIRED),
        ward: Yup.string().required(REQUIRED),
        address: Yup.string().required(REQUIRED),
        phone: Yup.string()
          .required(REQUIRED)
          .matches(PHONEVIET_REGEX, PHONE_VALID),
        email: Yup.string()
          .required(REQUIRED)
          .matches(EMAIL_REREX, EMAIL_VALID),
      })}
      onSubmit={(values, { resetForm }) => {
        alert("Cảm ơn đã điền thông tin 1 cách đầy đủ! Chúc bạn khỏe mạnh");
        resetForm({ values: "" });
        console.log(values);
      }}
      validate={(values) => {
        const errors = {};
        if (values.age < 1900) {
          errors.age = NUMBER_AGE_1900;
        }
        return errors;
      }}
    >
      {(formik) => (
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h3>Tờ Khai Y Tế</h3>
            </div>
            <div className="card-body">
              <form>
                {/* Part1 */}
                <div className="mb-3">
                  <label className="form-label">Họ tên</label>
                  <div
                    className={`${
                      formik.errors.name ? "custom-input-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                  </div>

                  {formik.errors.name && (
                    <div className="errorMess">{formik.errors.name}</div>
                  )}
                </div>
                <div className="mb-3">
                  <div
                    className={`${
                      formik.errors.cmnd ? "custom-input-error" : ""
                    }`}
                  >
                    <label className="form-label">Số hộ khẩu / CMND</label>
                    <input
                      type="text"
                      name="cmnd"
                      value={formik.values.cmnd}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.cmnd && (
                      <div className="errorMess">{formik.errors.cmnd}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <div
                    className={`${
                      formik.errors.age ? "custom-input-error" : ""
                    }`}
                  >
                    <label className="form-label">Năm sinh</label>
                    <input
                      type="text"
                      name="age"
                      value={formik.values.age}
                      validate={formik.handleValidate}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.age && (
                      <div className="errorMess">{formik.errors.age}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3 ">
                  <label className="form-label">Giới tính</label>
                  <div>
                    <label>
                      <Field
                        type="radio"
                        style={{ margin: "10px" }}
                        name="sex"
                        value="Nam"
                      />
                      <label>Nam</label>
                    </label>
                    <label>
                      <Field
                        type="radio"
                        style={{ margin: "10px" }}
                        name="sex"
                        value="Nữ"
                      />
                      <label>Nữ</label>
                    </label>
                    {formik.errors.sex && (
                      <div className="errorMess">{formik.errors.sex}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <div
                    className={`${
                      formik.errors.country ? "custom-input-error" : ""
                    }`}
                  >
                    <label className="form-label">Quốc tịch</label>
                    <input
                      type="text"
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.country && (
                      <div className="errorMess">{formik.errors.country}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <div
                    className={`${
                      formik.errors.company ? "custom-input-error" : ""
                    }`}
                  >
                    <label className="form-label">Công ty làm việc</label>
                    <input
                      type="text"
                      name="company"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.company && (
                      <div className="errorMess">{formik.errors.company}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <div
                    className={`${
                      formik.errors.position ? "custom-input-error" : ""
                    }`}
                  >
                    <label className="form-label">Bộ phận làm việc</label>
                    <input
                      type="text"
                      name="position"
                      value={formik.values.position}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.position && (
                      <div className="errorMess">{formik.errors.position}</div>
                    )}
                  </div>
                  <label>
                    <Field
                      type="checkbox"
                      style={{ margin: "10px" }}
                      name="save"
                      value="Có bảo hiểm"
                    />
                    <label>Có bảo hiểm</label>
                  </label>
                </div>
                {/* Part2 */}
                <h5>Địa chỉ liên lạc tại Việt Nam</h5>
                <div className="mb-3">
                  <div
                    className={`${
                      formik.errors.city ? "custom-input-error" : ""
                    }`}
                  >
                    <label className="form-label">Tỉnh thành</label>
                    <input
                      type="text"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.city && (
                      <div className="errorMess">{formik.errors.city}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <div
                    className={`${
                      formik.errors.district ? "custom-input-error" : ""
                    }`}
                  >
                    <label className="form-label">Quận / huyện</label>
                    <input
                      type="text"
                      name="district"
                      value={formik.values.district}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.district && (
                      <div className="errorMess">{formik.errors.district}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <div
                    className={`${
                      formik.errors.ward ? "custom-input-error" : ""
                    }`}
                  >
                    <label className="form-label">Phường / Xã</label>
                    <input
                      type="text"
                      name="ward"
                      value={formik.values.ward}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.ward && (
                      <div className="errorMess">{formik.errors.ward}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <div
                    className={`${
                      formik.errors.address ? "custom-input-error" : ""
                    }`}
                  >
                    <label className="form-label">
                      Số nhà, phố, tổ dân phố, thôn, đội
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.address && (
                      <div className="errorMess">{formik.errors.address}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <div
                    className={`${
                      formik.errors.phone ? "custom-input-error" : ""
                    }`}
                  >
                    <label className="form-label">Điện thoại</label>
                    <input
                      type="text"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.phone && (
                      <div className="errorMess">{formik.errors.phone}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <div
                    className={`${
                      formik.errors.email ? "custom-input-error" : ""
                    }`}
                  >
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.email && (
                      <div className="errorMess">{formik.errors.email}</div>
                    )}
                  </div>
                </div>
                {/* Part3 */}
                <h5>
                  Trong vòng 14 ngày qua, Anh /Chi có đến quốc gia /vùng lãnh
                  thổ nào (Có thể di qua nhiều quốc gia)
                </h5>
                <div className="mb-3">
                  <div>
                    <textarea
                      type="text"
                      name="info"
                      rows="5"
                      value={formik.values.info}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <h5>
                  Trong vòng 14 ngày qua, Anh /Chị có thấy xuất hiện dấu hiệu
                  nào sau dây không?
                </h5>
                {symptom.map((item) => {
                  return (
                    <div key={item.id} className="mb-1">
                      <label>
                        <Field
                          type="checkbox"
                          style={{ margin: "10px" }}
                          name="symptom"
                          value={item.title}
                        />
                        <label>{item.title}</label>
                      </label>
                    </div>
                  );
                })}
                <h5>Trong vòng 14 ngày qua, Anh/Chi có tiếp xúc với?</h5>
                {people.map((item) => {
                  return (
                    <div key={item.id} className="mb-1">
                      <label>
                        <Field
                          type="checkbox"
                          style={{ margin: "10px" }}
                          name="people"
                          value={item.title}
                        />
                        <label>{item.title}</label>
                      </label>
                    </div>
                  );
                })}
                <button
                  type="submit"
                  onClick={formik.handleSubmit}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="card-footer">copyright:Tran Sy Huy DEV FE</div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default Form;
