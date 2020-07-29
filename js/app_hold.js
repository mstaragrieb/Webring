var WebRing ={
  init: function (obj){
    var buildFilter = this.comicsFilter.init(obj);
    var buildSlider = this.setSlider(obj);
    var buildGrid = this.setGrid.init(obj);

  },
    /**
    * Builds Dom Tags and sets filtering actions
    *
    * @param  {obj} Comics Object
    * @return {Void}
    */
  comicsFilter : {
    init: function (obj){
      console.log(this);
      let comicTags = this.getTags(obj);
  //    obj.comicsByFilter = this.buildComicsByFilters(obj,comicTags);
      let comicTagsDom = this.setTags(comicTags);
      let boundComicsTags = this.bindElements(obj, comicTags);

    },
    /**
     * Outputs array with tags
     *
     * @param  {obj} Comic Object
     * @return {array} Tags Object
     *
     * TODO Add Comics to object and make array an object
     */
    getTags : function getTagsFromComics(obj){
         var arrayTags=[];
         obj.comicsData.forEach(function(el, index, array){
             obj.comicsData[index].comicTags.forEach(function(el, index, array){
                 if (!arrayTags.includes(el)){
                     arrayTags.push(el);
                 }
             });
         });
         return arrayTags;
     },
     /**
      * returns object with tags and what comics are in each tag
      *
      * @param  {obj} Comic Object
      * @return {obj} Tags Object
      *
      * TODO Add Comics to object and make array an object
      */
    buildComicsByFilters : function buildComicsByFilters(obj, tags){
      console.log(tags);
        // var arrayTags=[];
        // obj.comicsData.forEach(function(el, index, array){
        //     obj.comicsData[index].comicTags.forEach(function(el, index, array){
        //         if (!arrayTags.includes(el)){
        //             arrayTags.push(el);
        //         }
        //     });
        // });
        // return arrayTags;
    },
     /**
      * Builds Dom of tags
      *
      * @param  {obj} Tag Object
      * @return {Void}
      */
     setTags : function setTagsinDom(obj){
         var tagsHolder = document.querySelector('.comics-tags-holder');
         obj.forEach(function(el, index, array){
             var tagButton = document.createElement('button');
             tagButton.setAttribute('filter', el.toLowerCase());
             tagButton.classList.add('button');
             tagButton.classList.add('comics-filters-tag-button');
             tagButton.innerHTML = el;
             tagsHolder.appendChild(tagButton);
         });
     },
     bindElements : function bindTagElements(obj, tags){
       tags.forEach(function(el, index, array){
         console.log(this);
         let filterComicsObj = this;
         //console.log(document.querySelector('[filter="'+ el.toLowerCase() +'"]'));
          document.querySelector('[filter="'+ el.toLowerCase() +'"]').addEventListener("click", function(e){
            filterComicsObj.modifyFilters(obj, this.getAttribute('filter'));
          });
        },this);
     },
     modifyFilters : function bindTagElements(obj, tag){
        if (typeof(obj.currentFilters) === 'undefined'){
          obj.currentFilters = [];
        }
        if (!obj.currentFilters.includes(tag)){
          obj.currentFilters.push(tag);
        }else{
          obj.currentFilters.splice(obj.currentFilters.indexOf(tag), 1);
        };
        console.log(obj);
        //let filteredComics = this.filterComicsByFilters(obj);

      },
      filterComicsByFilters : function bindTagElements(obj){
         obj.currentFilters.forEach(function(el, index, array){
          console.log('BOB');
           console.log(obj);
         },this);
       },
  },
  /**
  * Builds Dom of tags
  *
  * @param  {obj} Comics Object
  * @return {Void}
  */
  setSlider : function setSliderFromComics(obj){
     var sliderHolder = document.querySelector('.comics-tags-holder');
        obj.comicsData.forEach(function(el, index, array){
            var slideNode = document.createElement('li');
            slideNode.classList.add('glide__slide');


            var slideNodeTop = document.createElement('div');
            slideNodeTop.classList.add('glide-slide-top');


            //slideNodeTop.classList.add('u-max-full-width');
            slideNodeTop.innerHTML='<img src="comic_images/' + obj.comicsData[index].id +'/slide.jpg">'  //height="100%" width="240"
            slideNode.appendChild(slideNodeTop);
            var slideNodeTopTitle = document.createElement('div');
            slideNodeTopTitle.classList.add('glide-slide-top-title');
            slideNode.appendChild(slideNodeTopTitle);

            var slideNodeTopTitleTransition = document.createElement('div');
            slideNodeTopTitleTransition.classList.add('sweep-background');
            slideNodeTopTitleTransition.classList.add('slide-title-clamp');
            slideNodeTopTitleTransition.innerHTML = obj.comicsData[index].comicName  //height="100%" width="240"
            slideNodeTopTitle.appendChild(slideNodeTopTitleTransition);

            var slideNodeBottom = document.createElement('div');
            slideNodeBottom.classList.add('glide-slide-bottom');

                var slideNodeBottomIcons = document.createElement('div');
                slideNodeBottomIcons.classList.add('glide-slide-bottom-icons');
                obj.comicsData[index].comicBadges.forEach(function(el, index, array){
                    //var badgeString = document.createTextNode('<img src="images/logo_square.png">');
                    var slideNodeBottomIcon = document.createElement('img');
                    slideNodeBottomIcon.setAttribute('src', 'images/brand_icons/icon_'+el.comicServer+'.png');
                    slideNodeBottomIcon.classList.add('glide-slide-bottom-icon');
                    slideNodeBottomIcons.appendChild(slideNodeBottomIcon);
                });
                slideNodeBottom.appendChild(slideNodeBottomIcons);

                var slideNodeBottomDescription = document.createElement('div');
                slideNodeBottomDescription.classList.add('glide-slide-bottom-description');
                slideNodeBottomDescription.classList.add('slide-line-clamp');
                var slideNodeBottomDescriptionText = document.createTextNode(obj.comicsData[index].comicDescription);
                slideNodeBottomDescription.appendChild(slideNodeBottomDescriptionText);
                slideNodeBottom.appendChild(slideNodeBottomDescription);

                var slideNodeBottomTags = document.createElement('div');
                slideNodeBottomTags.classList.add('glide-slide-bottom-tags');
                obj.comicsData[index].comicTags.forEach(function(el, index, array){
                    //var badgeString = document.createTextNode('<img src="images/logo_square.png">');
                    var slideNodeBottomTag = document.createTextNode(el);
                    slideNodeBottomTags.appendChild(slideNodeBottomTag);
                    if (index+1 < array.length){
                        var slideNodeBottomTagComma = document.createTextNode(', ');
                        slideNodeBottomTags.appendChild(slideNodeBottomTagComma);
                    }
                });
                slideNodeBottom.appendChild(slideNodeBottomTags);

            slideNode.appendChild(slideNodeBottom);
            document.getElementById('glide_hero_cells').appendChild(slideNode);
     });
  },
  /**
  * Builds Dom of Grid
  *
  * @param  {obj} Comics Object
  * @return {Void}
  */
  setGrid : {
    init: function setGridFromComics(obj){
      var intGridRows = this.getNumberOfRows(obj);
      var buildRows = this.buildRows(intGridRows);
      obj.randomizedComics = this.randomizeComics(obj);
      obj.comicChunks = this.chunkComics(obj);
      var buildItemsContainer = this.buildItemsContainer(obj);
    },
    buildRows: function buidGridRows(intGridRows){
      //var i=1
      for(let i = 1; i <= this.comicsRa.lenth(); i++) {
        //console.log(i);
        let gridRow = document.createElement('div');
        gridRow.classList.add('flex-row');
        gridRow.setAttribute('id', 'comic-grid-row-'+i);

        let gridRowLeftColumn = document.createElement('div');
        gridRowLeftColumn.classList.add('one-half');
        gridRowLeftColumn.classList.add('left');
        gridRow.appendChild(gridRowLeftColumn);

        let gridRowRightColumn = document.createElement('div');
        gridRowRightColumn.classList.add('one-half');
        gridRowRightColumn.classList.add('right');
        gridRow.appendChild(gridRowRightColumn);

        document.getElementById('comics-grid-container').appendChild(gridRow);

      }
    },
    buildItemsContainer: function buildItemsContainer(obj){
      obj.comicChunks.forEach(function(el, index, array){
        console.log(el);
        let leftPair = document.createElement('div');
        leftPair.classList.add('comics-grid-element-group');

        let leftPairItem1 = this.buildItem(array[index][0]);
        let leftPairItem2 = this.buildItem(array[index][1]);

        leftPair.appendChild(leftPairItem1);
        leftPair.appendChild(leftPairItem2);

        let rightPair = document.createElement('div');
        rightPair.classList.add('comics-grid-element-group');

        let rightPairItem1 = this.buildItem(array[index][2]);
        let rightPairItem2 = this.buildItem(array[index][3]);

        rightPair.appendChild(rightPairItem1);
        rightPair.appendChild(rightPairItem2);


        let insertChunk = document.getElementById('comic-grid-row-' + (index + 1));
        //console.log(insertChunk);
        insertChunk.firstChild.appendChild(leftPair);
        insertChunk.lastChild.appendChild(rightPair);
        // chunk.setAttribute('id', 'comic-grid-chunk-' + (index + 1));
        //console.log(array);
      },this);

    },
    buildItem: function buildItem(item){

      let itemDiv = document.createElement('div')
      itemDiv.classList.add('comics-grid-element');
      if (typeof(item) !== 'undefined'){
        itemDiv.innerHTML='<img src="comic_images/' + item.id +'/grid.jpg" class="u-max-full-width"><br /><div class="grid-title-clamp">' + item.comicName +'</div>';
      }

      return itemDiv;
    },
    getNumberOfRows: function getNumberOfRows(obj){
      return Math.ceil(obj.comicsData.length/4);
    },
    randomizeComics: function returRandomComicsArray(obj){
      let array = obj.comicsData;
      let arrayLength = array.length - 1
      for(let i = arrayLength; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },
    chunkComics: function returnChunkedComicsArray(obj){
      if (typeof(obj.randomizedComics) == undefined){
        obj.randomizedComics = [];
        console.warn("Something Wrong");
      }
      let array = obj.comicsData;
      let size = 4; let chunked = [];
      for (let i=0; i<array.length; i+=size) {
           chunked.push(array.slice(i,i+size));
      }
      //console.log(chunked);
      return chunked;
    }
  }
}

// Doc Ready
function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}





ready(function(){
    var init = WebRing.init(comicsList);




  // your code here
  var ComicSlider=new Glide('.glide', {
    type: 'carousel',
    autoplay: 0,
    animationDuration: 400,
    animationTimingFunc: 'ease-out',
    perView: 8,
    gap:0,
    focusAt: 0,
    breakpoints: {
        2121: {
            perView: 7
        },
        1818: {
            perView: 6
        },
        1515: {
            perView: 5
        },
        1212: {
            perView: 4
        },
        989: {
            perView: 3,
            peek: {
                before: 0,
                after: 80
            }
        },
        909: {
            perView: 3
        },
        686: {
            perView: 2,
            peek: {
                before: 0,
                after: 80
            }
        },
        606: {
            perView: 2
        },
        423: {
            perView: 1,
            peek: {
                before: 0,
                after: 120
            }
        },
        383: {
            perView: 1,
            peek: {
                before: 0,
                after: 80
            }
        },
        300: {
            perView: 1,
            peek: {
                before: 0,
                after: 40
            }
        }
    }
  }).mount();
});
