function carouselHeight() {
  var maxHeight = $('.carousel-focus-item:nth-of-type(2)').outerHeight()
  $('.carousel-focus-inner').css('height', maxHeight);
}

$(document).ready(function() {
  carouselHeight();
})

$(window).resize(function () { 
  carouselHeight();
});

$(document).on('click', '.carousel-focus-controls > .prev', function() {
	$(this).closest('.carousel-focus-inner').find('.carousel-focus-item ').first().hide().appendTo('.carousel-focus-items').show();
	$('.carousel-focus-item iframe').detach();
	getThumbnail()
});

$(document).on('click', '.carousel-focus-controls > .next', function() {
	$(this).closest('.carousel-focus-inner').find('.carousel-focus-item ').last().hide().prependTo('.carousel-focus-items').show();
	$('.carousel-focus-item iframe').detach();
	getThumbnail()
});

$(document).on('click', '.carousel-focus-item:nth-of-type(1) img', function() {
	$(this).closest('.carousel-focus-item ').insertAfter('.carousel-focus-item:nth-of-type(2)');
});

$(document).on('click', '.carousel-focus-item:nth-of-type(3) img', function() {
	$(this).closest('.carousel-focus-item ').insertBefore('.carousel-focus-item:nth-of-type(2)');
});



function makeSquiggle(squigglePathId, followPathId, squiggleStep, squiggleAmplitude)
            {
              var followPath = document.getElementById(followPathId);
              var pathLen = followPath.getTotalLength();

              // Adjust step so that there are a whole number of steps along the path
              var numSteps = Math.round(pathLen / squiggleStep);

              var pos = followPath.getPointAtLength(0);
              var newPath = "M" + [pos.x, pos.y].join(',');
              var side = -1;
              for (var i=1; i<=numSteps; i++)
              {
                var last = pos;
                var pos = followPath.getPointAtLength(i * pathLen / numSteps);

                // Find a point halfway between last and pos. Then find the point that is
                // perpendicular to that line segment, and is squiggleAmplitude away from
                // it on the side of the line designated by 'side' (-1 or +1).
                // This point will be the control point of the quadratic curve forming the
                // squiggle step.

                // The vector from the last point to this one
                var vector = {x: (pos.x - last.x),
                              y: (pos.y - last.y)};
                // The length of this vector
                var vectorLen = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
                // The point halfwasy between last point and tis one
                var half = {x: (last.x + vector.x/2),
                            y: (last.y + vector.y/2)};
                // The vector that is perpendicular to 'vector'
                var perpVector = {x: -(squiggleAmplitude * vector.y / vectorLen),
                                  y: (squiggleAmplitude * vector.x / vectorLen)};
                // No calculate the control point position
                var controlPoint = {x: (half.x + perpVector.x * side),
                                    y: (half.y + perpVector.y * side)};
                newPath += ("Q" + [controlPoint.x, controlPoint.y, pos.x, pos.y].join(','));
                // Switch the side (for next step)
                side = -side;
              }
              var squigglePath = document.getElementById(squigglePathId);
              squigglePath.setAttribute("d", newPath);
            }


            makeSquiggle("squiggle", "follow", 5, 2);



            $(window).scroll(function() {
              if ($(this).scrollTop() > 50 ) {
                  $('.scrolltop:hidden').stop(true, true).fadeIn();
              } else {
                  $('.scrolltop').stop(true, true).fadeOut();
              }
          });
          $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})


function makeSquiggle(squigglePathId, followPathId, squiggleStep, squiggleAmplitude)
          {
            var followPath = document.getElementById(followPathId);
            var pathLen = followPath.getTotalLength();

            // Adjust step so that there are a whole number of steps along the path
            var numSteps = Math.round(pathLen / squiggleStep);

            var pos = followPath.getPointAtLength(0);
            var newPath = "M" + [pos.x, pos.y].join(',');
            var side = -1;
            for (var i=1; i<=numSteps; i++)
            {
              var last = pos;
              var pos = followPath.getPointAtLength(i * pathLen / numSteps);

              // Find a point halfway between last and pos. Then find the point that is
              // perpendicular to that line segment, and is squiggleAmplitude away from
              // it on the side of the line designated by 'side' (-1 or +1).
              // This point will be the control point of the quadratic curve forming the
              // squiggle step.

              // The vector from the last point to this one
              var vector = {x: (pos.x - last.x),
                            y: (pos.y - last.y)};
              // The length of this vector
              var vectorLen = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
              // The point halfwasy between last point and tis one
              var half = {x: (last.x + vector.x/2),
                          y: (last.y + vector.y/2)};
              // The vector that is perpendicular to 'vector'
              var perpVector = {x: -(squiggleAmplitude * vector.y / vectorLen),
                                y: (squiggleAmplitude * vector.x / vectorLen)};
              // No calculate the control point position
              var controlPoint = {x: (half.x + perpVector.x * side),
                                  y: (half.y + perpVector.y * side)};
              newPath += ("Q" + [controlPoint.x, controlPoint.y, pos.x, pos.y].join(','));
              // Switch the side (for next step)
              side = -side;
            }
            var squigglePath = document.getElementById(squigglePathId);
            squigglePath.setAttribute("d", newPath);
          }


          makeSquiggle("squiggle2", "follow", 5, 2);

function makeSquiggle(squigglePathId, followPathId, squiggleStep, squiggleAmplitude)
          {
            var followPath = document.getElementById(followPathId);
            var pathLen = followPath.getTotalLength();

            // Adjust step so that there are a whole number of steps along the path
            var numSteps = Math.round(pathLen / squiggleStep);

            var pos = followPath.getPointAtLength(0);
            var newPath = "M" + [pos.x, pos.y].join(',');
            var side = -1;
            for (var i=1; i<=numSteps; i++)
            {
              var last = pos;
              var pos = followPath.getPointAtLength(i * pathLen / numSteps);

              // Find a point halfway between last and pos. Then find the point that is
              // perpendicular to that line segment, and is squiggleAmplitude away from
              // it on the side of the line designated by 'side' (-1 or +1).
              // This point will be the control point of the quadratic curve forming the
              // squiggle step.

              // The vector from the last point to this one
              var vector = {x: (pos.x - last.x),
                            y: (pos.y - last.y)};
              // The length of this vector
              var vectorLen = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
              // The point halfwasy between last point and tis one
              var half = {x: (last.x + vector.x/2),
                          y: (last.y + vector.y/2)};
              // The vector that is perpendicular to 'vector'
              var perpVector = {x: -(squiggleAmplitude * vector.y / vectorLen),
                                y: (squiggleAmplitude * vector.x / vectorLen)};
              // No calculate the control point position
              var controlPoint = {x: (half.x + perpVector.x * side),
                                  y: (half.y + perpVector.y * side)};
              newPath += ("Q" + [controlPoint.x, controlPoint.y, pos.x, pos.y].join(','));
              // Switch the side (for next step)
              side = -side;
            }
            var squigglePath = document.getElementById(squigglePathId);
            squigglePath.setAttribute("d", newPath);
          }


          makeSquiggle("squiggle3", "follow", 5, 2);


function makeSquiggle(squigglePathId, followPathId, squiggleStep, squiggleAmplitude)
          {
            var followPath = document.getElementById(followPathId);
            var pathLen = followPath.getTotalLength();

            // Adjust step so that there are a whole number of steps along the path
            var numSteps = Math.round(pathLen / squiggleStep);

            var pos = followPath.getPointAtLength(0);
            var newPath = "M" + [pos.x, pos.y].join(',');
            var side = -1;
            for (var i=1; i<=numSteps; i++)
            {
              var last = pos;
              var pos = followPath.getPointAtLength(i * pathLen / numSteps);

              // Find a point halfway between last and pos. Then find the point that is
              // perpendicular to that line segment, and is squiggleAmplitude away from
              // it on the side of the line designated by 'side' (-1 or +1).
              // This point will be the control point of the quadratic curve forming the
              // squiggle step.

              // The vector from the last point to this one
              var vector = {x: (pos.x - last.x),
                            y: (pos.y - last.y)};
              // The length of this vector
              var vectorLen = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
              // The point halfwasy between last point and tis one
              var half = {x: (last.x + vector.x/2),
                          y: (last.y + vector.y/2)};
              // The vector that is perpendicular to 'vector'
              var perpVector = {x: -(squiggleAmplitude * vector.y / vectorLen),
                                y: (squiggleAmplitude * vector.x / vectorLen)};
              // No calculate the control point position
              var controlPoint = {x: (half.x + perpVector.x * side),
                                  y: (half.y + perpVector.y * side)};
              newPath += ("Q" + [controlPoint.x, controlPoint.y, pos.x, pos.y].join(','));
              // Switch the side (for next step)
              side = -side;
            }
            var squigglePath = document.getElementById(squigglePathId);
            squigglePath.setAttribute("d", newPath);
          }


          makeSquiggle("squiggle4", "follow", 5, 2);



