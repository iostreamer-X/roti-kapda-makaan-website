$('#generate_hinglish_id_button').on('click', function() {
    rotiKapdaMakaan.generate().then(function (id) {
       $('#hinglish_id').html(id)
    });
});