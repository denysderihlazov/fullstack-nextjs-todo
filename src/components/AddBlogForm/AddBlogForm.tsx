import { IAddBlogForm } from "./AddBlogForm.interface";
import { AddBlogFormProps } from "./AddBlogForm.props";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input"
import { P } from "../P/P"

export const AddBlogForm = ({ className, ...props }: AddBlogFormProps): JSX.Element => {
    const { handleSubmit } = useForm<IAddBlogForm>();

    return (
        <form>
            <P>Title</P>
            <Input />
            <P>Description</P>
            <Input />
        </form>
    )
}