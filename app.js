// Tooltip

$('#copy').tooltip({
    trigger: 'click',
    placement: 'bottom'
  });
  
  function setTooltip(message) {
    $('#copy').tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }
  
  function hideTooltip() {
    setTimeout(function() {
      $('#copy').tooltip('hide');
    }, 1000);
  }
  
  // Clipboard
  var clipboard = new ClipboardJS('#copy');
  
  clipboard.on('success', function(e) {
       setTooltip('Copied!');
       hideTooltip();
   
  });
  
  clipboard.on('error', function(e) {
      setTooltip('Failed!');
      hideTooltip();
    
  });
   
  
  
  // var clipboard = new ClipboardJS('button');
  
  // clipboard.on('success', function(e) {
  //   setTooltip('Copied!');
  //   hideTooltip();
  // });
  
  // clipboard.on('error', function(e) {
  //   setTooltip('Failed!');
  //   hideTooltip();
  // });

  $.fn.ashCordian = function() {
  
    var container = $(this);
  
    container.find('header').click(function() {
      if($(this).siblings('section').css('display') == 'block'){
         container.find('section').slideUp(150);
      } else {
        container.find('section').slideUp(150);
         $(this).siblings('section').slideDown(150);
      }
    });
  };
  
  
  $('#accord1').ashCordian();
  
  $('#accord2').ashCordian();

  let carousel = (el, parameter) => {
    el = el !==undefined ? el : "";
    parameter = parameter !== undefined ? parameter : {};
    let method = {
        transition: parameter.transition !== undefined ? parameter.transition : null,
        responsive: parameter.grid !== undefined ? parameter.grid : null,
        pagination: parameter.pagination !== undefined ? parameter.pagination : false,
        autoplay: parameter.autoplay !== undefined ? parameter.autoplay : null,
        playTimer: parameter.autoplay !== undefined && parameter.autoplay.playTimer !== undefined
            ? parameter.autoplay.playTimer
            : 2000,
    },trigger = document.querySelectorAll(".carousel-slider"+el);
    Array.prototype.forEach.call(trigger, function (el) {
        
    let content = el.querySelector (".carousel-content"),
        count = content.childElementCount,
        responsive = method.responsive || JSON.parse (content.getAttribute ("data-grid")),
        widths,
        d_widths = el.offsetWidth,
        c_widths = d_widths * count,
        autoplay = method.autoplay || el.getAttribute ("data-autoplay"),
        autoplay_timer = method.playTimer || el.getAttribute ("data-timer"),
        is_pagination = method.pagination || content.getAttribute ("data-pagination"),
        config = {
            "lg": 1024,
            "md": 768,
            "sm": 667
        },
        step,
        pagination_content = el.querySelector (".carousel-pagination");

    content.firstElementChild.classList.add ("active");
    content.style.transitionDuration = method.transition || "500ms";
    this.autoplayEffect = null;

    let index_settings = () => {//tabindexleri slide itemlerine aktarıyoruz
        let slides = content.querySelectorAll (".slide-item");
        for (i in slides) {
            slides[ i ].tabIndex = i;
        }
    }, size = (widths) => {
        let item_resize = el.querySelectorAll (".slide-item");
        Array.prototype.forEach.call (item_resize, (item_size) => {
            item_size.style.width = widths + "px";
        });
    }, responsive_grid = () => {
        if (responsive) {
            if (window.innerWidth >= config.lg) {
                if (responsive.xl !== undefined) {
                    gridCount = responsive.xl;
                    widths = Number (d_widths) / Number (gridCount);
                }
            } else if (window.innerWidth >= config.md) {
                if (responsive.lg !== undefined) {
                    gridCount = responsive.lg;
                    widths = Number (d_widths) / Number (gridCount);
                    console.log (d_widths, gridCount, responsive)
                }
            } else if (window.innerWidth >= config.sm) {
                if (responsive.md !== undefined) {
                    gridCount = responsive.md;
                    widths = Number (d_widths) / Number (gridCount);
                }
            } else if (window.innerWidth < config.sm) {
                if (responsive.sm !== undefined) {
                    gridCount = responsive.sm;
                    widths = Number (d_widths) / Number (gridCount);
                }
            }
        } else {
            widths = d_widths;
        }
        size (widths);
        c_widths = widths * content.lastElementChild.tabIndex;
        content.style.minWidth = c_widths;
        return widths;
    };

    let autoplay_ = () => {
        if (autoplay) {
            let i = 0;
            let last_i = content.lastElementChild.tabIndex;
            this.autoplayEffect = setInterval (() => {
                if (last_i > i) {
                    content.style.transform = "translate3d(-" + d_widths * i + "px,0px,0px)";
                    content.children.item (i + 1).classList.add ("active");
                    content.children.item (i).classList.remove ("active");
                } else {
                    content.lastElementChild.classList.remove ("active");
                    content.firstElementChild.classList.add ("active");
                    content.style.transform = "translate3d(" + 0 + "px,0px,0px)";

                    i = 0;
                }
                i++;
            }, Number (autoplay_timer));
        }
    }, pagination = () => {
        if (is_pagination) {
            let pagination_item = el.querySelector (".carousel-pagination");
            for (let i = 0; i < count; i++) {
                let p_item = document.createElement ("a");
                p_item.href = "#!";
                p_item.classList.add ("item");
                p_item.tabIndex = i;
                pagination_item.appendChild (p_item);
            }
        }
    }, slider_next = (el) => {
        let content = el.querySelector (".carousel-content");
        let last_i = content.lastElementChild.tabIndex;
        let i = content.querySelector (".slide-item.active").tabIndex + 1;
        step = d_widths / responsive_grid ();
        widths = d_widths / step;
        if (step > 1) {
            last_i = last_i - step + 1;
        }
        if (i <= last_i) {
            content.children.item (i).classList.add ("active");
            content.children.item (i - 1).classList.remove ("active");
            let ml_ = widths * i;
            content.style.transform = "translate3d(-" + ml_ + "px,0px,0px)";
            i++;
        } else {
            i = 1;
            content.lastElementChild.classList.remove ("active");
            content.firstElementChild.classList.add ("active");
            content.style.transform = "translate3d(" + 0 + "px,0px,0px)";
        }
    }, slider_prev = () => {
        let content = el.querySelector (".carousel-content");
        let last_i = content.lastElementChild.tabIndex;
        let i = content.querySelector (".slide-item.active").tabIndex;
        step = d_widths / responsive_grid ();
        widths = d_widths / step;
        if (i >= 1) {
            content.children.item (i - 1).classList.add ("active");
            content.children.item (i).classList.remove ("active");
            i--;
            let ml_ = widths * i;
            content.style.transform = "translate3d(-" + ml_ + "px,0px,0px)";
        } else {
            i = last_i;
            content.lastElementChild.classList.add ("active");
            content.firstElementChild.classList.remove ("active");
            if (step > 1) {
                last_i = last_i - step + 1;
            }
            let ml_ = widths * ( last_i - 1 );
            content.style.transform = "translate3d(-" + ml_ + "px,0px,0px)";
            i--;
        }

    }, slider_direction = (el) => {
        let prev = el.querySelector (".carousel-prev-btn");
        let next = el.querySelector (".carousel-next-btn");
        if (el.contains (prev) && el.contains (next)) {
            prev.addEventListener ("click", () => {
                window.clearInterval (this.autoplayEffect);
                slider_prev (el);
            }, false);

            next.addEventListener ("click", () => {
                window.clearInterval (this.autoplayEffect);
                slider_next (el);
            }, false);
        }
        if (el.contains (pagination_content)) {
            pagination ();
            let paginate = pagination_content.querySelectorAll (".item");
            Array.prototype.forEach.call (paginate, (el) => {
                el.addEventListener ("click", () => {
                    window.clearInterval (this.autoplayEffect);
                    let last_i = el.parentNode.lastChild.tabIndex,
                        i = el.tabIndex;
                    let ml_ = widths * i;
                    content.style.transform = "translate3d(-" + ml_ + "px,0px,0px)";
                }, false);
            });
        }
    };
    window.addEventListener ("resize", () => {
        d_widths = el.offsetWidth;
        console.log ("ekran değişti", d_widths);
        responsive_grid ();
    }, true);
    responsive_grid ();
    slider_direction (el);
    autoplay_ ();
    index_settings ();

    });

    return this;
};

carousel();

var box = document.getElementById('dvd'),
  colors = ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00', '#80ff00', '#40ff00', '#00ff00', '#00ff40', '#00ff80', '#00ffbf', '#00ffff', '#00bfff', '#0080ff', '#0040ff', '#0000ff', '#4000ff', '#8000ff', '#bf00ff', '#ff00ff', '#ff00bf', '#ff0080', '#ff0040', '#ff0000'],
  currentColor = Math.floor((Math.random() * 25) + 1),
  win = window,
  ww = win.innerWidth,
  wh = win.innerHeight,
  translateX = Math.floor((Math.random() * ww) + 1),
  translateY = Math.floor((Math.random() * wh) + 1),
  boxWidth = box.offsetWidth,
  boxHeight = box.offsetHeight,
  boxTop = box.offsetTop,
  boxLeft = box.offsetLeft,
  xMin = -boxLeft,
  yMin = -boxTop,
  xMax = win.innerWidth - boxLeft - boxWidth,
  yMax = win.innerHeight - boxTop - boxHeight,
  request = null,
  direction = 'se',
  speed = 4,
  timeout = null;

init();

// reset constraints on resize
window.addEventListener('resize', function(argument) {
  clearTimeout(timeout);
  timeout = setTimeout(update, 100);
}, false);

function init() {
  request = requestAnimationFrame(init);
  move();
  // setInterval(function() {
  //   move();
  // }, 16.66);
}

// reset constraints
function update() {
  xMin = -boxLeft;
  yMin = -boxTop;
  xMax = win.innerWidth - boxLeft - boxWidth;
  yMax = win.innerHeight - boxTop - boxHeight;
}

function move() {
  setDirection();
  setStyle(box, {
    transform: 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0)',
  });
}

function setDirection() {
  switch (direction) {
    case 'ne':
      translateX += speed;
      translateY -= speed;
      break;
    case 'nw':
      translateX -= speed;
      translateY -= speed;
      break;
    case 'se':
      translateX += speed;
      translateY += speed;
      break;
    case 'sw':
      translateX -= speed;
      translateY += speed;
      break;
  }
  setLimits();
}

function setLimits() {
  if (translateY <= yMin) {
    if (direction == 'nw') {
      direction = 'sw';
    } else if (direction == 'ne') {
      direction = 'se';
    }
    switchColor();
  }
  if (translateY >= yMax) {
    if (direction == 'se') {
      direction = 'ne';
    } else if (direction == 'sw') {
      direction = 'nw';
    }
    switchColor();
  }
  if (translateX <= xMin) {
    if (direction == 'nw') {
      direction = 'ne';
    } else if (direction == 'sw') {
      direction = 'se';
    }
    switchColor();
  }
  if (translateX >= xMax) {
    if (direction == 'ne') {
      direction = 'nw';
    } else if (direction == 'se') {
      direction = 'sw';
    }
    switchColor();
  }
}

function switchColor() {
  var color = Math.floor((Math.random() * 25) + 1);
  
  while( color == currentColor ) {
    color = Math.floor((Math.random() * 25) + 1)
  }
  
  setStyle(box, {
    color: colors[color]
  });
  
  currentColor = color;
}

function getVendor() {
  var ua = navigator.userAgent.toLowerCase(),
    match = /opera/.exec(ua) || /msie/.exec(ua) || /firefox/.exec(ua) || /(chrome|safari)/.exec(ua) || /trident/.exec(ua),
    vendors = {
      opera: '-o-',
      chrome: '-webkit-',
      safari: '-webkit-',
      firefox: '-moz-',
      trident: '-ms-',
      msie: '-ms-',
    };

  return vendors[match[0]];
};

function setStyle(element, properties) {
  var prefix = getVendor(),
    property, css = '';
  for (property in properties) {
    css += property + ': ' + properties[property] + ';';
    css += prefix + property + ': ' + properties[property] + ';';
  }
  element.style.cssText += css;
};
