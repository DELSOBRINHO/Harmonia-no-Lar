export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Bem-vindos ao Harmonia no Lar
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Um aplicativo baseado nos princípios bíblicos e nos escritos de Ellen G. White
        para fortalecer o relacionamento matrimonial e familiar.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="card">
          <h3 className="text-lg font-semibold mb-2"> Direitos e Deveres</h3>
          <p className="text-gray-600">
            Conheça os direitos e deveres bíblicos do marido e da esposa baseados na Palavra de Deus e nos escritos de Ellen G. White.
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-2"> Avaliação Diária</h3>
          <p className="text-gray-600">
            Sistema de pontuação para acompanhar o cumprimento dos deveres com ressarcimento baseado em R$ 10,00 por ponto.
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-2"> Meditações</h3>
          <p className="text-gray-600">
            Reflexões diárias sobre relacionamento e família com conteúdo da Casa Publicadora Brasileira.
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-2"> Checklist</h3>
          <p className="text-gray-600">
            Acompanhamento diário com sistema de bonificação dupla para quem cumpre mesmo quando o outro falha.
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-2"> Orçamento Doméstico</h3>
          <p className="text-gray-600">
            Controle financeiro familiar com categorização de receitas e despesas para uma administração sábia.
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-2"> Dicas</h3>
          <p className="text-gray-600">
            10 dicas para um lar feliz e conselhos para filhos vencedores baseados em princípios cristãos.
          </p>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-primary-50 rounded-lg">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">
          Fundamentação Bíblica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div>
            <h4 className="font-semibold text-primary-700">Para o Marido:</h4>
            <p className="text-sm text-gray-600">
              "Vós, maridos, amai vossas mulheres, como também Cristo amou a igreja" - Efésios 5:25
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary-700">Para a Esposa:</h4>
            <p className="text-sm text-gray-600">
              "Vós, mulheres, sujeitai-vos a vossos maridos, como ao Senhor" - Efésios 5:22
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
