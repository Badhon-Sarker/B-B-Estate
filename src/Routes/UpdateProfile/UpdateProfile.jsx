import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, profileUpdate } = useContext(AuthContext);
  const name = user.displayName;
  const email = user.email;
  const image = user.photoURL;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const updateName = data.updateName;
    const updateImage = data.updateImage;

    profileUpdate(updateName, updateImage)

      .then((result) => {
        toast.success("Succesfully profile updated");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 font-poppins">
        <Helmet><title>Update Profile</title></Helmet>
      <div className="hero-content flex-col">
        <div data-aos="fade-down" data-aos-duration="1000" className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update here!</h1>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body px-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                placeholder="Your name"
                className="input input-bordered"
                {...register("updateName")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                defaultValue={image}
                placeholder="Your photoURL"
                className="input input-bordered"
                {...register("updateImage")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={email}
                placeholder="Email"
                className="input input-bordered"
                {...register("updateEmail")}
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
