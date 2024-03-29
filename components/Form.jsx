'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Form = () => {

  const [ errors, setErrors ] = useState([]);
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const { register, handleSubmit } = useForm();

  function sendEmail(data) {
    const apiEndpoint = '/api/email';

    setIsSubmitting(true);
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        setIsSubmitting(false)
        setErrors({
          title: "Success!",
          description: response.message,
          variant: ""
        });
        setTimeout(() => {
          setErrors([]);
        }, 5000); // hide message after 10 seconds
      })
      .catch((err) => {
        setIsSubmitting(false)
        setErrors({
          title: "Oh no!",
          description: response.message,
          variant: "destructive"
        });
        setTimeout(() => {
          setErrors([]);
        }, 5000); // hide message after 10 seconds
      });
  }

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(sendEmail)}>
      {/* input */}
      <div className="relative flex items-center">
        <Input type='text' name="name" id="name" placeholder="Name" {...register('name', { required: true })} />
        <User className="absolute right-6" size={20} />
      </div>
      {/* email */}
      <div className="relative flex items-center">
        <Input type='email' name="email" id="email" placeholder="Email" {...register('email', { required: true })} />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea type='message' name="message" id="message" placeholder="Type your message here" {...register('message', { required: true })} />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" disabled={isSubmitting} className="flex items-center gap-x-1 mx-w-[166px]">
        Send
        <ArrowRightIcon size={20} />
      </Button>
      {errors.title && 
        <Alert className="fixed bottom-10 left-10 p-4 max-w-[300px]" variant={errors.variant}>
          <AlertTitle>{errors.title}</AlertTitle>
          <AlertDescription>{errors.description}</AlertDescription>
        </Alert>
      }
    </form>
  )
}

export default Form;