//CHECKBOX DROPDOWN

const checkboxDropdown = document.querySelector('.checkbox-dropdown');

function openCloseCheckboxDropdown() {
    document.addEventListener('click', e => {
        let target = e.target;
        if (target.closest('.checkbox-dropdown__label')) {
            checkboxDropdown.classList.toggle('checkbox-dropdown__in')
        }
        if (!target.closest('.checkbox-dropdown') && checkboxDropdown.classList.contains('checkbox-dropdown__in')) {
            checkboxDropdown.classList.remove('checkbox-dropdown__in')
        }
    });

}
openCloseCheckboxDropdown();
function countingSelectedItems() {
    const checkboxItems = checkboxDropdown.querySelectorAll('.checkbox__input'),
          checkboxDropdownLabel = checkboxDropdown.querySelector('.checkbox-dropdown__label-text')
    checkboxDropdownLabelInner = checkboxDropdownLabel.innerHTML;
    let count = 0;

    checkboxItems.forEach(checkboxItem => {
        checkboxItem.addEventListener('click', e => {
            if (checkboxItem.type === "checkbox" && checkboxItem.checked === true) {
                count++;
                checkboxDropdownLabel.innerHTML = `Выбрано: ${count}`;
            } else {
                count--;
                if (count > 0) {
                    checkboxDropdownLabel.innerHTML = `Выбрано: ${count}`;
                } else {
                    checkboxDropdownLabel.innerHTML = checkboxDropdownLabelInner;
                }
            }


        })
    });
}
countingSelectedItems();