import { IAddBlogForm } from "./AddBlogForm.interface";
import { AddBlogFormProps } from "./AddBlogForm.props";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input"
import { P } from "../P/P"
import { Button } from "../Button/Button";

export const AddBlogForm = ({ className, ...props }: AddBlogFormProps): JSX.Element => {
    const { handleSubmit } = useForm<IAddBlogForm>();

    return (
        <form>
            <P>Title</P>
            <Input placeholder="Input your title" />
            <P>Description</P>
            <Input placeholder="Input your description" />
            <Button appearance="primary">Submit</Button>
        </form>
    )
}