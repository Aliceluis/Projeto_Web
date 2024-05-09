document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.remove');
    const plusButtons = document.querySelectorAll('.qty button:nth-child(3)'); // Seletor do botão de adicionar
    const minusButtons = document.querySelectorAll('.qty button:nth-child(1)'); // Seletor do botão de subtrair
  
    // Adicionar evento de clique para cada botão de remoção
    removeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const row = this.parentElement.parentElement;
        row.remove();
        updateTotal();
      });
    });
  
    // Adicionar evento de clique para cada botão de adicionar quantidade
    plusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const qtySpan = this.parentElement.querySelector('span');
        let qty = parseInt(qtySpan.textContent);
        qty++;
        qtySpan.textContent = qty;
        updateTotal();
      });
    });
  
    // Adicionar evento de clique para cada botão de remover quantidade
    minusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const qtySpan = this.parentElement.querySelector('span');
        let qty = parseInt(qtySpan.textContent);
        if (qty > 1) {
          qty--;
          qtySpan.textContent = qty;
          updateTotal();
        }
      });
    });
  
    // Atualizar o total quando a quantidade de produtos muda
    function updateTotal() {
      let subtotal = 0;
      const totalSpan = document.querySelector('.box footer span:nth-child(2)');
      const rows = document.querySelectorAll('tbody tr');
  
      rows.forEach(row => {
        const priceCell = row.querySelector('td:nth-child(2)');
        const qtyCell = row.querySelector('.qty span');
        const totalCell = row.querySelector('td:nth-child(4)');
        const price = parseFloat(priceCell.textContent.replace('R$ ', ''));
        const qty = parseInt(qtyCell.textContent);
        const total = price * qty;
        totalCell.textContent = `R$ ${total.toFixed(2)}`;
        subtotal += total;
      });
  
      totalSpan.textContent = `R$ ${subtotal.toFixed(2)}`;
    }
  });
  