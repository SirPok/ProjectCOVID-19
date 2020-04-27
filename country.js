$(function(){
    
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html("ทั้งหมดใน "+country);
    $("#country2").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var selectedCountry = result[country];
        console.log(selectedCountry);

        
        
        console.log(selectedCountry.length);
        
        for(var i=0;i<selectedCountry.length;i++){
           
            var row = `<tr>
            <th scope="row">${selectedCountry[i].date}</th>
            <td>${selectedCountry[i].confirmed}</td>
            <td>${selectedCountry[i].deaths}</td>
            <td>${selectedCountry[i].recovered}</td>
          </tr>`
        
         
          
          $("#data").append(row);

        }

        
        

        $("#confirmed").append(selectedCountry[selectedCountry.length-1].confirmed);
        $("#Deaths").append(selectedCountry[selectedCountry.length-1].deaths);
        $("#Recovered").append(selectedCountry[selectedCountry.length-1].recovered);

        let myChart = document.getElementById('myChart').getContext('2d');

        
        
        let massPopChart = new Chart(myChart, {


            type : 'line',
            data:{
                labels:[
                    
                    selectedCountry[selectedCountry.length-10].date,
                    selectedCountry[selectedCountry.length-9].date,
                    selectedCountry[selectedCountry.length-8].date,
                    selectedCountry[selectedCountry.length-7].date,
                    selectedCountry[selectedCountry.length-6].date, 
                    selectedCountry[selectedCountry.length-5].date, 
                    selectedCountry[selectedCountry.length-4].date, 
                    selectedCountry[selectedCountry.length-3].date, 
                    selectedCountry[selectedCountry.length-2].date, 
                    selectedCountry[selectedCountry.length-1].date],

                datasets:[{
                    label : 'Confirmed',
                    backgroundColor :[
                        '#ecb800',
                        '#ecb800',
                        '#ecb800',
                        '#ecb800',
                        '#ecb800',
                        '#ecb800',
                    ],
                    
                    borderColor:[
                        '#ecb800',
                    ],
                    data:[
                            
                        selectedCountry[selectedCountry.length-10].confirmed,
                        selectedCountry[selectedCountry.length-9].confirmed,
                        selectedCountry[selectedCountry.length-8].confirmed,
                        selectedCountry[selectedCountry.length-7].confirmed,
                        selectedCountry[selectedCountry.length-6].confirmed,
                        selectedCountry[selectedCountry.length-5].confirmed,
                        selectedCountry[selectedCountry.length-4].confirmed,
                        selectedCountry[selectedCountry.length-3].confirmed,
                        selectedCountry[selectedCountry.length-2].confirmed,
                        selectedCountry[selectedCountry.length-1].confirmed

                    ],
                    fill:false,
                },{
                    label : 'Deaths',
                    backgroundColor :[

                        '#d22d36',
                        '#d22d36',
                        '#d22d36',
                        '#d22d36',
                        '#d22d36',
                        '#d22d36',
                    ],
                    
                    borderColor:[
                        '#d22d36',
                    ],
                    data:[

                        selectedCountry[selectedCountry.length-10].deaths,
                        selectedCountry[selectedCountry.length-9].deaths,
                        selectedCountry[selectedCountry.length-8].deaths,
                        selectedCountry[selectedCountry.length-7].deaths,
                        selectedCountry[selectedCountry.length-6].deaths,
                        selectedCountry[selectedCountry.length-5].deaths,
                        selectedCountry[selectedCountry.length-4].deaths,
                        selectedCountry[selectedCountry.length-3].deaths,
                        selectedCountry[selectedCountry.length-2].deaths,
                        selectedCountry[selectedCountry.length-1].deaths

                    ],
                    fill:false,
                },{

                    label : 'Recovered',
                    backgroundColor :[
                        '#039245',
                        '#039245',
                        '#039245',
                        '#039245',
                        '#039245',
                        '#039245',
                    ],
                    
                    borderColor:[
                        '#039245',
                    ],
                    data:[

                        selectedCountry[selectedCountry.length-10].recovered,
                        selectedCountry[selectedCountry.length-9].recovered,
                        selectedCountry[selectedCountry.length-8].recovered,
                        selectedCountry[selectedCountry.length-7].recovered,
                        selectedCountry[selectedCountry.length-6].recovered,
                        selectedCountry[selectedCountry.length-5].recovered,
                        selectedCountry[selectedCountry.length-4].recovered,
                        selectedCountry[selectedCountry.length-3].recovered,
                        selectedCountry[selectedCountry.length-2].recovered,
                        selectedCountry[selectedCountry.length-1].recovered


                    ],

                    fill:false,


                }]
                
            },
            option:{

            }
        });

    });



})