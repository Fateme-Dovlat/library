import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

const Register = () => {
  const { control, handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="نام خود را وارد کنید"
                {...register("name")}
              />
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
                {...register("email")}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                رمز عبور
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="رمز عبور خود را وارد کنید"
                {...register("password", {
                  required: 'لطفا پسوورد را وارد کنید'
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
                تکرار رمز عبور
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="رمز عبور را دوباره وارد کنید"
                {...register("confirmPassword")}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              ثبت‌نام
            </button>
          </form>

          <DevTool control={control} />

          <p className="text-center text-muted mt-3 mb-0">
            قبلاً ثبت‌نام کرده‌اید؟{" "}
            <a href="/login" className="text-decoration-none">
              ورود به حساب
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;