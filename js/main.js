$(document).ready(function () {
    $(".toggle").click(function (event) {
        let $this = $(this);
        accordionAnimate($this, event);
    });
});

function accordionAnimate($this, e) {
    e.preventDefault();

    if ($this.next().hasClass("show")) {
        $this.next().removeClass("show");
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find("li .inner").removeClass("show");
        $this.parent().parent().find("li .inner").slideUp(350);
        $this.next().toggleClass("show");
        $this.next().slideToggle(350);
    }
}