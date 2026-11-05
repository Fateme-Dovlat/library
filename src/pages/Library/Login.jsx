
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { t, i18n } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.get("http://localhost:9000/users");
            console.log(response.data);
            console.log("شماره واردشده:", data.mobile);


            const user = response.data.find(
                (item) => item.mobile === data.mobile.trim()
            );
            if (!user) {
                alert("کاربری با این شماره موبایل پیدا نشد");
                return;
            }

            if (user.password !== data.password) {
                alert("رمز عبور اشتباه است");
                return;
            }

            localStorage.setItem(
                "user",
                JSON.stringify({
                    id: user.id,
                    name: user.name,
                    mobile: user.mobile,
                })
            );

            window.dispatchEvent(new Event("userLogin"));

            navigate("/");
        } catch (error) {
            console.log(error);
            alert("خطا در ارتباط با سرور");
        }
    };

    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow p-4">
                        <h3 className="text-center mb-4">ورود به حساب کاربری</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">شماره موبایل</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="شماره موبایل خود را وارد کنید"
                                    {...register("mobile", {
                                        required: "شماره موبایل الزامی است",
                                        pattern: {
                                            value: /^09\d{9}$/,
                                            message: "شماره موبایل معتبر نیست",
                                        },
                                    })}
                                />
                                {errors.mobile && (
                                    <small className="text-danger">
                                        {errors.mobile.message}
                                    </small>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">رمز ورود</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder={t("register.passwordPlaceholder")}
                                    {...register("password", {
                                        required: "رمز عبور الزامی است",
                                    })}
                                />
                                {errors.password && (
                                    <small className="text-danger">
                                        {errors.password.message}
                                    </small>
                                )}
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                ورود
                            </button>
                        </form>

                        <p className="text-center text-muted mt-3 mb-0">
                            قبلاً ثبت‌نام کرده‌اید؟{" "}
                            <Link to="/register"> ثبت نام</Link>
                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
