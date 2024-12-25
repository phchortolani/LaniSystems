import { Book, Building2, Clock, Mail, MapPin, Phone, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center">
          <Image src={'/logo.png'} alt="Logo da Lani Systems" width={200} height={200} />

        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div id="hero" className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
            <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">Bem-vindo à</h2>
            <h1 className="mt-1 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Lani Systems
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-300">
              Soluções tecnológicas personalizadas para o seu negócio desde 2021
            </p>
          </div>
        </div>

        {/* Company Information Section */}
        <div id="about" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-100 mb-4">
                Informações Legais da Empresa
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 text-gray-400 mr-2" />
                  <span>
                    <strong>Razão Social:</strong> LANI SYSTEMS
                    <br />
                    <strong>CNPJ:</strong> 46.006.437/0001-33
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-2" />
                  <span>
                    <strong>Telefones:</strong>
                    <br />
                    Principal: (11) 95788-6697
                    <br />
                    Suporte: (11) 98852-0205
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-2" />
                  <span>
                    <strong>Email:</strong> aitab@lanisystems.com.br
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <span>
                    <strong>Endereço:</strong>
                    <br />
                    São Bernardo do Campo - SP, Brasil
                    <br />
                    CEP: 09760-100
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span>
                    <strong>Horário de Atendimento:</strong>
                    <br />
                    Segunda a Sexta: 09:00 - 18:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-100 mb-4">
                Nossos Serviços
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-100">Desenvolvimento de Software</h4>
                  <p className="mt-2 text-gray-300">
                    Soluções personalizadas para sua empresa, incluindo aplicações web,
                    mobile e sistemas integrados.
                  </p>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-100">Consultoria em TI</h4>
                  <p className="mt-2 text-gray-300">
                    Análise e implementação de soluções tecnológicas para otimizar
                    seus processos de negócio.
                  </p>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-100">Suporte Técnico</h4>
                  <p className="mt-2 text-gray-300">
                    Suporte especializado para manter suas operações funcionando
                    sem interrupções.
                  </p>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-100">Cloud Computing</h4>
                  <p className="mt-2 text-gray-300">
                    Soluções em nuvem para aumentar a eficiência e reduzir custos
                    operacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-100 mb-4">
                Entre em Contato
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 bg-gray-800 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm">
                    Li e concordo com a{" "}
                    <Link href="/privacy" className="text-sm text-blue-400 hover:underline">
                      Política de Privacidade
                    </Link>{" "}
                    *
                  </label>
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Lani Systems. Todos os direitos reservados.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/privacy" className="text-sm text-blue-400 hover:underline">
                  Política de Privacidade
                </Link>
                <Link href="/terms" className="text-sm text-blue-400 hover:underline">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
