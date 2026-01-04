import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PORTFOLIO_DATA, CONTACT_CONTENT } from "../../constants/constants";

// Validation Schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Digite um e-mail válido" }),
  subject: z
    .string()
    .min(5, { message: "O assunto deve ter pelo menos 5 caracteres" }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const apiUrl = import.meta.env.VITE_EMAIL_API_URL || "https://portfolio-email-api-ashen.vercel.app/api/send-email";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Informações de Contato (2 colunas) */}
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-6">
                <h2
                  className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
                  dangerouslySetInnerHTML={{ __html: CONTACT_CONTENT.title }}
                />
                <p className="text-slate-400 text-lg leading-relaxed">
                  {CONTACT_CONTENT.description}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex flex-col space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-bold">
                    {CONTACT_CONTENT.socialsTitle}
                  </span>
                  <div className="flex space-x-4">
                    <a
                      href={PORTFOLIO_DATA.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300"
                      title="GitHub"
                    >
                      <svg
                        className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={PORTFOLIO_DATA.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                      title="LinkedIn"
                    >
                      <svg
                        className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-bold">
                    {CONTACT_CONTENT.directContactTitle}
                  </span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.email}`}
                    className="text-xl text-white font-medium hover:text-emerald-400 transition-colors"
                  >
                    {PORTFOLIO_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário (3 colunas) */}
            <div className="lg:col-span-3">
              <div className="glass p-8 md:p-10 rounded-4xl border-white/5 bg-white/2">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">
                        {CONTACT_CONTENT.form.nameLabel}
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        className={`w-full bg-slate-900/50 border rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 outline-none transition-all ${
                          errors.name ? "border-red-500/50" : "border-white/10"
                        }`}
                        placeholder={CONTACT_CONTENT.form.namePlaceholder}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs ml-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">
                        {CONTACT_CONTENT.form.emailLabel}
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className={`w-full bg-slate-900/50 border rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 outline-none transition-all ${
                          errors.email ? "border-red-500/50" : "border-white/10"
                        }`}
                        placeholder={CONTACT_CONTENT.form.emailPlaceholder}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs ml-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">
                      {CONTACT_CONTENT.form.subjectLabel}
                    </label>
                    <input
                      {...register("subject")}
                      type="text"
                      className={`w-full bg-slate-900/50 border rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 outline-none transition-all ${
                        errors.subject ? "border-red-500/50" : "border-white/10"
                      }`}
                      placeholder={CONTACT_CONTENT.form.subjectPlaceholder}
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs ml-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">
                      {CONTACT_CONTENT.form.messageLabel}
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className={`w-full bg-slate-900/50 border rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 outline-none transition-all resize-none ${
                        errors.message ? "border-red-500/50" : "border-white/10"
                      }`}
                      placeholder={CONTACT_CONTENT.form.messagePlaceholder}
                      disabled={isSubmitting}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-400 text-xs ml-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-5 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all duration-300 overflow-hidden shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span className="relative z-10 cursor-pointer">
                          {CONTACT_CONTENT.form.buttonText}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Feedback Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium text-center animate-in fade-in slide-in-from-bottom-2">
                      Mensagem enviada com sucesso! Entrarei em contato em
                      breve.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium text-center animate-in fade-in slide-in-from-bottom-2">
                      Ocorreu um erro ao enviar. Por favor, tente novamente ou
                      use o e-mail direto.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
