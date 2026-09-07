    // MENGAMBIL ELEMEN HTML

    const taskInput = document.getElementById("taskInput");

    const addButton = document.getElementById("addButton");

    const taskList = document.getElementById("taskList");

    const emptyMessage = document.getElementById("emptyMessage");

    // MENAMBAHKAN TUGAS

    addButton.addEventListener("click", function () {

        // Mengambil isi input
        const taskText = taskInput.value.trim();


        // Mengecek apakah input kosong
        if (taskText === "") {

            alert("Silakan masukkan tugas terlebih dahulu!");

            return;
        }

        // MEMBUAT ELEMENT TUGAS

        const taskItem = document.createElement("li");

        taskItem.classList.add("task");


        // MEMBUAT CHECKBOX

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.classList.add("task-checkbox");    


        // MEMBUAT TEKS

        const text = document.createElement("span");

        text.textContent = taskText;

        text.classList.add("task-text");


        // MEMBUAT BUTTON HAPUS

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Hapus";

        deleteButton.classList.add("delete-button");

        // CHECKBOX SELESAI

        checkbox.addEventListener("change", function () {

            if (checkbox.checked) {

                taskItem.classList.add("completed");

            } else {

                taskItem.classList.remove("completed");

            }

        });


        // MENGHAPUS TUGAS

        deleteButton.addEventListener("click", function () {

            taskItem.remove();

            checkEmptyTask();

        });


        // MEMASUKKAN ELEMENT

        taskItem.appendChild(checkbox);

        taskItem.appendChild(text);

        taskItem.appendChild(deleteButton);


        // MENAMPILKAN TUGAS

        taskList.appendChild(taskItem);


        // Mengosongkan input
        taskInput.value = "";


        // Mengembalikan fokus ke input
        taskInput.focus();


        // Mengecek jumlah tugas
        checkEmptyTask();

    });

    // MENAMBAHKAN TUGAS DENGAN ENTER

    taskInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            addButton.click();
            
        }

    });


    // MENGECEK APAKAH TUGAS KOSONG

    function checkEmptyTask() {

        if (taskList.children.length === 0) {

            emptyMessage.style.display = "block";

        } else {

            emptyMessage.style.display = "none";

        }

    }