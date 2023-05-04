import { IAddBlogForm } from "./AddBlogForm.interface";
import { AddBlogFormProps } from "./AddBlogForm.props";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input"
import { P } from "../P/P"
import { Button } from "../Button/Button";
import { Textarea } from "../TextArea/TextArea";

export const AddBlogForm = ({ className, ...props }: AddBlogFormProps): JSX.Element => {
    const { handleSubmit } = useForm<IAddBlogForm>();

    const onSubmit = (data: IAddBlogForm) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <P>Title</P>
            <Input placeholder="Input your title" />
            <P>Description</P>
            <Textarea placeholder="Input your description" />
            <Button appearance="primary">Submit</Button>
        </form>
    )
}