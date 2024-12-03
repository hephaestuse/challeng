import { supabase } from "../supabaseClient";

export type FormValues = {
  fullName: string;
  email: string;
  password: string;
};

export async function getUser(
  value: FormValues,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) {
  try {
    const { data, error } = await supabase
      .from<formValues>("users")
      .select("*")
      .eq("email", value.email)
      .eq("password", value.password);

    if (error) throw error;

    if (data && data.length > 0) {
      setErrorMessage(`Welcome back, ${data[0].username}!`);
    } else {
      setErrorMessage("email or password incurrect");
    }
  } catch (error: any) {
    setErrorMessage(`Login error: ${error.message}`);
  }
}
/************************end get user ***************************************/
