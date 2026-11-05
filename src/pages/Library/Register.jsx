import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { createUser } from "../../services/userServices";

const Register = () => {
  const [loading, setloading] = useState(false)
  const [message, setmessage] = useState("")

  const { t } = useTranslation();
  const { control, handleSubmit, register, formState: { errors }, watch } = useForm();

  const onSubmit = async (data) => {
    try {
      setloading(true);
      setmessage("");

      // بررسی شماره موبایل تکراری
      const { data: existingUsers } = await axios.get(
        "http://localhost:9000/users",
        {
          params: {
            mobile: data.mobile.trim(),
          },
        }
      );

      if (existingUsers.length > 0) {
        setmessage("این شماره موبایل قبلاً ثبت شده است.");
        return;
      }

      // ساخت کاربر جدید
      const newUser = {
        name: data.name.trim(),
        mobile: data.mobile.trim(),
        email: data.email.trim(),
        password: data.password,
      };

      // ثبت کاربر
      await createUser(newUser);

      setmessage("ثبت‌نام با موفقیت انجام شد.");

    } catch (error) {
      console.log("Registration error:", error);
      setmessage("خطا در ثبت‌نام. لطفاً دوباره تلاش کنید.");

    } finally {
      setloading(false);
    }
  };



  return (
    <div className="container py-5" dir="rtl">
      <div
        className="card shadow-sm border-0 mx-auto"
        style={{ maxWidth: "450px" }}
      >
        <div className="card-body p-4">
          <h3 className="text-center mb-4">
            ثبت‌نام در کتاب‌فروشی
          </h3>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                نام
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="نام خود را وارد کنید"
                {...register("name", {
                  required: "لطفاً نام خود را وارد کنید",
                  minLength: {
                    value: 3,
                    message: "نام باید حداقل ۳ کاراکتر باشد",
                  },
                  validate: (value) =>
                    value.trim().length >= 3 || "نام معتبر وارد کنید",
                })}
              />
              <div className="text-danger small mt-1">
                {errors?.name?.message}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                شماره موبایل
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                placeholder="شماره موبایل خود را وارد کنید"
                {...register("mobile", {
                  required: "لطفاً شماره موبایل خود را وارد کنید",
                  pattern: {
                    value: /^09\d{9}$/,
                    message: "شماره موبایل باید با 09 شروع شود و 11 رقم باشد",
                  },
                  validate: (value) =>
                    value.trim().length >= 11 || "شماره معتبر وارد کنید",
                })}
              />
              <div className="text-danger small mt-1">
                {errors?.mobile?.message}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                ایمیل
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@email.com"
                {...register("email", {
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "ایمیل را درست وارد کن"
                  },
                  required: 'لطفا ایمیل را وارد کنید'
                })}
              />

              <div className="text-danger small mt-1">
                {errors?.email?.message}
              </div>

            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                {t("register.password")}
              </label>

              <input
                type="password"
                className="form-control"
                id="password"
                placeholder={t("register.passwordPlaceholder")}
                {...register("password", {
                  required: t("register.passwordRequired"),
                  minLength: {
                    value: 8,
                    message: t("register.passwordMinLength"),
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*\d).+$/,
                    message: t("register.passwordPattern"),
                  },
                })}
              />

              {errors.password && (
                <div className="text-danger small mt-1">
                  {errors.password.message}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label">
                {t("register.confirmPassword")}
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="رمز عبور را دوباره وارد کنید"
                {...register("confirmPassword", {
                  required: "لطفاً رمز عبور را تکرار کنید",
                  validate: (value) =>
                    value === watch("password") || "رمزهای عبور یکسان نیستند",
                })}
              />
              <div className="text-danger small mt-1">
                {errors?.confirmPassword?.message}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
            </button>
            {message && (
              <div className="alert alert-info mt-3">
                {message}
              </div>
            )}

          </form>

          <DevTool control={control} />

        </div>
      </div>
    </div>


  );
};

export default Register;