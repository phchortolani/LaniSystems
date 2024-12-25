const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-6 text-blue-400">
                    Política de Privacidade
                </h1>
                <p className="text-sm text-gray-300 mb-4">
                    Atualizado em: {new Date().toLocaleDateString("pt-BR")}
                </p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Informações que coletamos
                    </h2>
                    <p className="text-gray-400 mb-4">
                        Coletamos informações que você nos fornece diretamente, como nome,
                        e-mail, número de telefone e outras informações enviadas por meio
                        de formulários em nosso site.
                    </p>
                    <p className="text-gray-400">
                        Também coletamos automaticamente informações sobre sua navegação no
                        site, como endereço IP, tipo de navegador, páginas visitadas e
                        tempo de permanência, utilizando cookies e tecnologias similares.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Uso das informações
                    </h2>
                    <p className="text-gray-400">
                        As informações coletadas são utilizadas para:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 mt-2 space-y-2">
                        <li>Entrar em contato para responder suas solicitações;</li>
                        <li>Melhorar nossos serviços e experiência do usuário;</li>
                        <li>Enviar comunicações, como ofertas e atualizações.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Compartilhamento de informações
                    </h2>
                    <p className="text-gray-400">
                        Não compartilhamos suas informações pessoais com terceiros, exceto
                        conforme exigido por lei ou para proteger nossos direitos.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Seus direitos
                    </h2>
                    <p className="text-gray-400">
                        Você tem o direito de acessar, corrigir ou excluir suas informações
                        pessoais. Para isso, entre em contato conosco pelo e-mail:
                        <a
                            href="mailto:aitab@lanisystems.com.br"
                            className="text-blue-400 hover:underline ml-1"
                        >
                            aitab@lanisystems.com.br
                        </a>
                        .
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Cookies e tecnologias de rastreamento
                    </h2>
                    <p className="text-gray-400">
                        Utilizamos cookies para melhorar sua experiência no site. Você pode
                        desativar os cookies diretamente nas configurações do seu
                        navegador.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">
                        Alterações na Política de Privacidade
                    </h2>
                    <p className="text-gray-400">
                        Podemos atualizar esta política periodicamente. Recomendamos que
                        você revise esta página regularmente para se manter informado sobre
                        quaisquer alterações.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
