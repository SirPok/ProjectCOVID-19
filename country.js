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
                labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets:[{
                    label : 'Confirm',
                    backgroundColor :[
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                    ],
                    
                    borderColor:[
                        'rgba(255, 99, 132)'
                    ],
                    data:[
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                    ],
                    fill:false,
                },{
                    label : 'Thailand',
                    backgroundColor :[
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                    ],
                    
                    borderColor:[
                        'rgba(255, 99, 132)'
                    ],
                    data:[
                            95072,
                            105162,
                            153060,
                            153060,
                            181045,
                            617594
                    ],
                    fill:false,
                }]
                
            },
            option:{

            }
        });

    });



})