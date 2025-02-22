import { ProfileForm } from "@/components/shared/ContactForm"


const ContactPage = () => {
  return (
    <div className="min-h-screen w-full max-w-[800px] mx-auto flex flex-col items-center justify-center">
      <div>
        <h1 className="text-center text-3xl font-bold py-5">Contact With Us</h1>
      </div>
      <div className="w-full">
        <ProfileForm />
      </div>
    </div>
  )
}

export default ContactPage