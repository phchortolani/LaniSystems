const TermsOfUsePage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-6 text-blue-400">Termos de Uso</h1>
                <p className="text-sm text-gray-300 mb-4">
                    Atualizado em: {new Date().toLocaleDateString("pt-BR")}
                </p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Aceitação dos Termos
                    </h2>
                    <p className="text-gray-400">
                        Ao acessar e usar este site, você concorda em cumprir estes Termos
                        de Uso, todas as leis e regulamentos aplicáveis, e reconhece que é
                        responsável pelo cumprimento de quaisquer leis locais aplicáveis.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Uso Permitido
                    </h2>
                    <p className="text-gray-400">
                        Você concorda em utilizar este site apenas para fins legais e em
                        conformidade com estes Termos de Uso. É proibido:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 mt-2 space-y-2">
                        <li>Realizar qualquer atividade ilegal ou fraudulenta;</li>
                        <li>Usar o site para disseminar conteúdo malicioso ou prejudicial;</li>
                        <li>Tentar acessar áreas restritas do site sem autorização.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Propriedade Intelectual
                    </h2>
                    <p className="text-gray-400">
                        Todo o conteúdo deste site, incluindo textos, imagens, gráficos e
                        códigos, é de propriedade exclusiva e está protegido pelas leis de
                        direitos autorais e propriedade intelectual. É proibido copiar,
                        reproduzir ou distribuir qualquer parte do site sem autorização
                        prévia.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Limitação de Responsabilidade
                    </h2>
                    <p className="text-gray-400">
                        Este site é fornecido "como está" e não garantimos que estará livre
                        de erros, interrupções ou vulnerabilidades. Não nos responsabilizamos
                        por qualquer dano decorrente do uso ou da incapacidade de usar este
                        site.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Modificações nos Termos
                    </h2>
                    <p className="text-gray-400">
                        Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
                        momento. Recomendamos que você revise esta página regularmente para
                        estar ciente de quaisquer atualizações.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Contato
                    </h2>
                    <p className="text-gray-400">
                        Se você tiver dúvidas sobre estes Termos de Uso, entre em contato
                        conosco pelo e-mail:
                        <a
                            href="mailto:aitab@lanisystems.com.br"
                            className="text-blue-400 hover:underline ml-1"
                        >
                            aitab@lanisystems.com.br
                        </a>
                        .
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfUsePage;
