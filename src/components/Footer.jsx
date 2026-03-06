import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-bg-footer border-t border-gold/8 overflow-hidden relative">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex flex-col mb-6 border-l-4 border-gold/40 pl-4">
            <span className="font-display text-white text-xl leading-none font-bold">Leite & Fontes</span>
            <span className="font-body text-gold text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Advogados Associados</span>
          </div>
          <p className="font-body text-white/60 text-sm mb-4 leading-relaxed">
            Especialistas em Direito Tributário e Previdenciário para profissionais da saúde. Foco em resultados estratégicos e atendimento personalizado.
          </p>
          <div className="font-display text-white/40 text-xs">OAB/SP 123.456</div>
        </div>

        <div className="max-w-md">
          <h4 className="font-display text-white text-sm uppercase tracking-widest mb-6 border-b border-gold/20 pb-2">Informações Importantes</h4>
          <p className="font-body text-muted/50 text-[10px] leading-relaxed">
            Este site tem caráter meramente informativo e educacional, em conformidade com o Código de Ética e Disciplina da OAB. 
            O conteúdo aqui exposto não constitui consulta jurídica, parecer ou qualquer tipo de assessoria legal. 
            Cada caso deve ser analisado individualmente por um profissional qualificado.
          </p>
          <p className="font-body text-muted/30 text-[9px] mt-6">
            © {new Date().getFullYear()} Leite & Fontes Advogados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
