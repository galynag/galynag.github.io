/**
 * Created by Galina on 27.07.2017.
 */
// external js: isotope.pkgd.js
$(document).ready(function () {
    $('nav').load("../templates/header.html");
    $('footer').load("../templates/footer.html");
    var myColorScheme = {
        navigationbar: {
            background: '#f00',
            border: '1px dotted #555',
            color: '#ccc',
            colorHover: '#fff'
        },
        thumbnail: {
            background: '#f00',
            border: '0px solid #000',
            labelBackground: 'transparent',
            labelOpacity: '0.8',
            titleColor: '#fff',
            descriptionColor: '#eee'
        }
    };
    var myColorSchemeViewer = {
        background: 'rgba(1, 1, 1, 0.75)',
        imageBorder: '15px solid #f8f8f8',
        imageBoxShadow: '#888 0px 0px 20px',
        barBackground: '#222',
        barBorder: '2px solid #111',
        barColor: '#eee',
        barDescriptionColor: '#aaa'
    };

    jQuery("#nanogallery2").nanogallery2({
        thumbnailHoverEffect: 'borderLighter',
        colorScheme: myColorScheme,
        colorSchemeViewer: myColorSchemeViewer
    });


        // $("#nanogallery2").nanogallery2({
        //
        //     thumbnailWidth: 'auto',
        //     thumbnailHeight: 250,
        //
        //     colorScheme: 'none',
        //     thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
        //     theme: 'light',
        //     thumbnailGutterWidth : 0,
        //     thumbnailGutterHeight : 0,
        //     i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
        //     thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' }
        // },console.log('123'));


});
