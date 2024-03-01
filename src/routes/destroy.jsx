import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  console.log("destroyparam", params);
  //   throw new Error("oh no newerror");
  await deleteContact(params.contactId);
  return redirect("/");
}
