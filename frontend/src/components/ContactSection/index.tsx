import ContactImage from "@assets/contact-img.png";
import {
  fetchContactSecurityChallenge,
  submitContactForm,
} from "@services/wordpress";
import { useState, useRef, useEffect, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";

function FormSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="h-10 bg-gray-300 rounded-md animate-pulse w-full" />
      <div className="h-10 bg-gray-300 rounded-md animate-pulse w-full" />
      <div className="h-[120px] bg-gray-300 rounded-md animate-pulse w-full sm:col-span-2" />

      {/* Verificação de segurança */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center sm:col-span-2 mt-2">
        <span className="shrink-0 w-40 h-6 bg-gray-300 rounded-md animate-pulse" />
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 flex-grow-1 w-full">
          <div className="bg-gray-200 p-2 rounded-md flex items-center gap-4 lg:gap-8">
            <div className="w-8 h-6 bg-gray-300 rounded animate-pulse" />
            <span>+</span>
            <div className="w-8 h-6 bg-gray-300 rounded animate-pulse" />
          </div>
          <span>=</span>
          <div className="h-10 bg-gray-300 rounded-md animate-pulse flex-1 w-full" />
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const defaultFormData = {
    name: "",
    email: "",
    message: "",
    security_result: "",
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [codeChallenge, setCodeChallenge] = useState({ a: 0, b: 0 });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    security_result: false,
  });
  const [isLoading, setLoading] = useState(true);

  // Refs para debounce
  const debounceTimers = useRef<{ [key: string]: NodeJS.Timeout }>({});

  const validationRules = {
    name: (value: string) => {
      if (!value.trim()) return "Nome é obrigatório";
      return "";
    },
    email: (value: string) => {
      if (!value.trim()) return "Email é obrigatório";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Email inválido";
      return "";
    },
    message: (value: string) => {
      if (!value.trim()) return "Mensagem é obrigatória";
      return "";
    },
    security_result: (value: string) => {
      if (codeChallenge.a + codeChallenge.b !== parseInt(value)) {
        return "Resultado da verificação de segurança é inválido";
      }
      return "";
    },
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    const error = validationRules[field as keyof typeof validationRules](value);
    setErrors((prev) => ({ ...prev, [field]: !!error }));

    if (debounceTimers.current[field]) {
      clearTimeout(debounceTimers.current[field]);
    }

    debounceTimers.current[field] = setTimeout(() => {
      if (error) toast.error(error);
    }, 1000);
  };

  const getCodeChallenge = useCallback(() => {
    fetchContactSecurityChallenge()
      .then((data) => {
        setCodeChallenge(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message || "Erro ao buscar desafio de segurança");
      });
  }, []);

  function handleSubmit() {
    submitContactForm(formData)
      .then((response) => {
        console.log(response);
        toast.success("Mensagem enviada com sucesso!");
        setFormData(defaultFormData);
        setErrors({
          name: false,
          email: false,
          message: false,
          security_result: false,
        });
        getCodeChallenge();
      })
      .catch((error) => {
        toast.error(error.message || "Erro ao enviar mensagem");
      });
  }

  useEffect(() => {
    getCodeChallenge();
  }, [getCodeChallenge]);

  return (
    <section className="text-[var(--color-secundary)] px-6 pt-20 bg-[var(--bg-secundary)] mt-20">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-center p-8 rounded-2xl">
        <div className="flex justify-center">
          <img
            src={ContactImage}
            alt="Ilustração"
            className="max-w-xs w-full"
          />
        </div>

        <div className="flex flex-col gap-6 bg-[var(--bg-primary)] p-6 rounded-2xl">
          <div>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--color-secundary)]">
              Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
              faucibus sit scelerisque
            </p>
          </div>

          <span className="text-xs text-gray-500 italic">
            *Lorem ipsum dolor sit amet consectetur
          </span>

          {isLoading ? (
            <FormSkeleton />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome*"
                  className={`px-4 py-2 rounded-md bg-white text-sm border transition-all duration-300 ${
                    errors.name
                      ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.4)]"
                      : "border-gray-300"
                  }`}
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />

                <input
                  type="email"
                  placeholder="Email*"
                  className={`px-4 py-2 rounded-md bg-white text-sm border transition-all duration-300 ${
                    errors.email
                      ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.4)]"
                      : "border-gray-300"
                  }`}
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />

                <textarea
                  placeholder="Mensagem*"
                  className={`px-4 py-2 rounded-md bg-white text-sm border transition-all duration-300 min-h-[120px] sm:col-span-2 resize-none ${
                    errors.message
                      ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.4)]"
                      : "border-gray-300"
                  }`}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center">
                <span className="shrink-0 font-semibold w-max">
                  Verificação de segurança
                </span>
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 flex-grow-1 w-full">
                  <div className="bg-[#DFDCD5] p-2 rounded-md flex items-center gap-4 lg:gap-8">
                    <span className="text-purple-600 font-semibold">
                      {codeChallenge.a}
                    </span>
                    <span>+</span>
                    <span className="text-purple-600 font-semibold">
                      {codeChallenge.b}
                    </span>
                  </div>
                  <span>=</span>
                  <input
                    type="text"
                    placeholder="Resultado*"
                    className={`px-4 py-2 rounded-md bg-white text-sm border transition-all duration-300 ${
                      errors.security_result
                        ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.4)]"
                        : "border-gray-300"
                    }`}
                    value={formData.security_result}
                    onChange={(e) =>
                      handleChange("security_result", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-purple-200 text-purple-800 font-semibold text-sm px-6 py-2 rounded-md transition hover:bg-purple-300"
                  onClick={handleSubmit}
                >
                  Lorem ipsum
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
