// app/privacidade/page.tsx (App Router)
// ou pages/privacidade.tsx (Pages Router)

import React from "react";

export default function PoliticaPrivacidade() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade – Pongada</h1>
      <p className="text-sm text-gray-500 mb-8">Última atualização: 18/09/2025</p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          O aplicativo <strong>Pongada</strong> foi desenvolvido por{" "}
          <strong>VS Web & Apps</strong> e está disponível na Google Play
          Store. Esta Política de Privacidade explica como tratamos as
          informações dos usuários.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2">1. Informações coletadas</h2>
          <p>
            O aplicativo <strong>não coleta, armazena ou compartilha informações pessoais</strong>{" "}
            dos usuários. Não solicitamos dados como nome, e-mail, telefone ou
            localização. Também não utilizamos cookies ou tecnologias semelhantes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Uso de informações</h2>
          <p>
            Como não coletamos dados pessoais, não fazemos uso de informações de
            identificação individual. O aplicativo é destinado apenas para
            entretenimento.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Permissões</h2>
          <p>
            O Pongada pode solicitar permissões necessárias apenas para o
            funcionamento do jogo. Nenhuma dessas permissões é usada para coletar
            informações pessoais.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Compartilhamento de informações</h2>
          <p>
            Não compartilhamos dados com terceiros. Não há integração com redes
            sociais, anunciantes ou outros serviços externos.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Crianças</h2>
          <p>
            O Pongada é adequado para todas as idades e não coletamos informações
            de crianças ou adolescentes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente.
            Recomendamos que o usuário revise esta página regularmente para estar
            ciente de eventuais mudanças.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o
            aplicativo Pongada, entre em contato:
          </p>
          <p className="mt-2">
            📧 <a href="mailto:vswebapps.contato@gmail.com" className="text-blue-600 underline">
              vinicius11santos1992@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
