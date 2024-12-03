import Form from "./features/form/Form";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://ytsemhqpkrfukphvpzxe.supabase.co/storage/v1/object/public/backgroundimags/BgLogin.webp')",
      }}
      className=" bg-no-repeat bg-cover w-screen h-screen flex justify-center items-center"
    >
      <Form />
    </div>
  );
}
