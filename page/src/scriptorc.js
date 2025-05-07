 // Script para limitar seleção de sabores a 3 opções
 document.addEventListener('DOMContentLoaded', function() {
    const saboresCheckboxes = document.querySelectorAll('input[name="sabores[]"]');
    
    saboresCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedCount = document.querySelectorAll('input[name="sabores[]"]:checked').length;
            
            if (checkedCount > 3) {
                this.checked = false;
                alert('Você pode selecionar no máximo 3 sabores!');
            }
        });
    });

    // Script para validação do formulário
    document.getElementById('orcamentoBolo').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Verificar se pelo menos um sabor foi selecionado
        const saboresSelecionados = document.querySelectorAll('input[name="sabores[]"]:checked').length;
        if (saboresSelecionados === 0) {
            alert('Por favor, selecione pelo menos um sabor para o bolo!');
            return;
        }
        
        // Aqui você pode adicionar mais validações ou o código para enviar o formulário
        alert('Orçamento solicitado com sucesso! Entraremos em contato em breve.');
    });
});