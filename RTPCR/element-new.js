var list1 = [];
        var list2 = [];
        var list3 = [];
        var list4 = [];
        var list5 = [];
        var list6 = [];
        var list7 = [];
        var list8 = [];
        var list9 = [];
        var list10 = [];

        var n = 1;
        var x = 0;

        function AddRow() {

            var AddRown = document.getElementById('show');
            AddRown.style.backgroundColor = 'white';
            var NewRow = AddRown.insertRow(n);

            list1[x] = document.getElementById("name").value;
            list2[x] = document.getElementById("aadhar").value;
            list3[x] = document.getElementById("dob").value;
            list4[x] = document.getElementById("city").value;
            list5[x] = document.getElementById("t-date").value;
            list6[x] = document.getElementById("t-time").value;
            list7[x] = document.querySelector('input[name="result"]:checked').value;
            list8[x] = document.getElementById("lab").value;
            list9[x] = document.getElementById("rpt-no").value;
            list10[x] = document.querySelector('input[name="gender"]:checked').value;

            var cel1 = NewRow.insertCell(0);
            var cel2 = NewRow.insertCell(1);
            var cel3 = NewRow.insertCell(2);
            var cel4 = NewRow.insertCell(3);
            var cel5 = NewRow.insertCell(4);
            var cel6 = NewRow.insertCell(5);
            var cel7 = NewRow.insertCell(6);
            var cel8 = NewRow.insertCell(7);
            var cel9 = NewRow.insertCell(8);
            var cel10 = NewRow.insertCell(9);

            cel1.innerHTML = list1[x];
            cel2.innerHTML = list2[x];
            cel3.innerHTML = list3[x];
            cel4.innerHTML = list4[x];
            cel5.innerHTML = list5[x];
            cel6.innerHTML = list6[x];
            cel7.innerHTML = list7[x];
            cel8.innerHTML = list8[x];
            cel9.innerHTML = list9[x];
            cel10.innerHTML = list10[x];



            n++;
            x++;
            alert("row added!")
        }
        function view() {
            var x = document.getElementById('show');
            x.style.display = 'flex';


        // }
        // function myFunction() {
        //     var input, filter, table, tr, td, i, txtValue;
        //     input = document.getElementById("search");
        //     filter = input.value.toUpperCase();
        //     table = document.getElementById("table");
        //     tr = table.getElementsByTagName("tr");
        
        //     for (i = 0; i < tr.length; i++) {
        //         td = tr[i].getElementsByTagName("td")[1];
        //         if (td) {
        //             txtValue = td.textContent || td.innerText;
        //             if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //                 tr[i].style.display = "";
        //             } else {
        //                 tr[i].style.display = "none";
        //             }
        //         }
        //     }
        // }
        function myFunction() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("search");
            filter = input.value.toUpperCase();
            table = document.getElementById("show");
            tr = table.getElementsByTagName("tr");
        
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
        function reset() {
            window.location.reload();
        }
    }