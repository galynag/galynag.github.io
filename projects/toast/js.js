/**
 * Created by Galina on 21.07.2017.
 */
$(document).ready(function() {
    var masToast = {
        'className' : 'my-toast-message',
        'text' : 'I\'m toast',
        'counter' : 0,
        'toastF' : function(color,duration) {
            $('.my-toast-messages').append('<div id="message'+this.counter+'" class="'+masToast.className+'">'+masToast.text+'</div>');
            $(masToast.className).css ({
                'backgroundColor' : color,
            })
            $('#message'+this.counter).slideDown(1000);
            $('#message'+(this.counter-1)).hide(8000);
            $('#message'+(this.counter-5)).remove();
            this.counter++;
        }
    }
    $('.myToast').on('click', function(){ masToast.toastF('black',2000)});
});




// если раскомментить данный вариант то, будет нескончаемый водопад. Кнопку нажимать не нужно, click() - имитирует нажатие

// var masToast = {
//     'className' : 'toast-message',
//     'text' : 'I\'m toast',
//     'counter' : 0,
//     'toastF' : function(color,duration) {
//             $('.toast-messages').append('<div id="message'+this.counter+'" class="'+masToast.className+'">'+masToast.text+'</div>');
//             $(masToast.className).css ({
//                 'background' : color,
//             })
//             $('#message'+this.counter).slideDown(1000);
//             $('#message'+(this.counter-1)).hide(4000);
//             // $('#message'+(this.counter-1)).remove();
//             this.counter++;

//         }
//     }

// $('.toast').on('click', function(){ masToast.toastF('red',2000)});

// setInterval(() => $('.toast').click(), 300)