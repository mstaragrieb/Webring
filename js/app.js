class Webring {
  constructor(comicObj){
    this.comicsData = comicObj.comicsData;
    this.comicsTags = [];
    this.comicsFilters = [];
    this.comicsRandomized = [];
    this.comicsRandomizedFiltered = [];
    this.comicsRandomizedChunked = [];
    this.featuredComics = [];
    this.firstRun = true;
    //console.log(this);
  }

  init(){
    this.build();
  }
  build(){
    //Build Data
    console.log(this);
    this.cleanAndClear();
    this.comicsTags = this.getTags();
    this.comicsFilters = this.getFilters();
    this.comicsRandomized = this.randomizeComics();
    console.log(this.randomizeComics());
    this.comicsRandomizedFiltered = this.filterComicsAND();
    console.log(this.filterComicsAND());
    console.log(this.comicsRandomizedFiltered);
    this.comicsRandomizedChunked = this.chunkRadomizedComics();
    this.featuredComics = this.getFeatured();

    //Build DOM
    if (this.firstRun){
      this.setSliderDom();
      this.setFiltersDom();
      this.firstRun = false;
      this.bindElements();
      console.log('clang');
    }
    this.setGridDom();
  }

  cleanAndClear(){
    document.getElementById('comics-grid-container').innerHTML = "";
  }

  getTags(){
    var arrayTags=[];
    this.comicsData.forEach(function(el, index, array){
        this.comicsData[index].comicTags.forEach(function(el, index, array){
            if (!arrayTags.includes(el)){
                arrayTags.push(el);
            }
        },this);
    },this);
    return arrayTags;
  }

  getFilters(){
    let hash = [];
    if(window.location.hash) {
      hash = window.location.hash.substring(2).split(","); //Puts hash in
    }
     return hash;
  }

  randomizeComics(){
    let array = this.comicsData;
    let arrayLength = array.length - 1
    for(let i = arrayLength; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  filterComics(){
    let arrayFilteredComics = [];
    this.comicsRandomized.forEach(function(el, index, array){
      let comic = el;
      //console.log(this.comicsRandomizedFiltered)
      this.comicsFilters.forEach(function(el, index, array){
        //console.log(el);
        let filterEl = el;
        //console.log(filterEl);
        //console.log(comic.comicTags.indexOf(filterEl));

        if (comic.comicTags.indexOf(filterEl) !== -1){
          //console.log(arrayFilteredComics);
          //if this.comicsRandomizedFiltered.indexOf

          arrayFilteredComics.push(comic);
        }
      // //  if el.comicTags.indexOf()
      },this);
    },this);
    //console.log(arrayFilteredComics);
    return arrayFilteredComics;
  }

  filterComicsAND(){
    let arrayFilteredComics = [];
    this.comicsRandomized.forEach(function(el, index, array){
      let comic = el;
      //console.log(this.comicsRandomizedFiltered)
      this.comicsFilters.forEach(function(el, index, array){
        //console.log(el);
        let filterEl = el;
        //console.log(filterEl);
        //console.log(comic.comicTags.indexOf(filterEl));

        if (comic.comicTags.indexOf(filterEl) !== -1){
          //console.log(arrayFilteredComics);
          //if this.comicsRandomizedFiltered.indexOf

          arrayFilteredComics.push(comic);
        }
      // //  if el.comicTags.indexOf()
      },this);
    },this);
    //console.log(arrayFilteredComics);
    return arrayFilteredComics;
  }

  chunkRadomizedComics(){
    let array = [];
    if (this.comicsRandomizedFiltered.length === 0){
      console.log("ding")
      array = this.comicsRandomized
    }else{
      console.log("dong")
      array = this.comicsRandomizedFiltered;
    }
    let size = 4; let chunked = [];
    for (let i=0; i<array.length; i+=size) {
         chunked.push(array.slice(i,i+size));
    }
    //console.log(chunked);
    return chunked;
  }

  getFeatured(){
    var arrayFeatured=[];
    this.comicsData.forEach(function(el, index, array){
      if (el.featured){
        arrayFeatured.push(el.id);
      }
    },this);
    return arrayFeatured;
  }

  setSliderDom(){
    let sliderHolder = document.querySelector('.comics-tags-holder');
    this.featuredComics.forEach(function(el, index, array){
      let featuredID = el;
      this.comicsData.forEach(function(el, index, array){
        if (featuredID == el.id){
          let slideNode = document.createElement('li');
          slideNode.classList.add('glide__slide');

          let slideNodeTop = document.createElement('div');
          slideNodeTop.classList.add('glide-slide-top');

          slideNodeTop.innerHTML='<img src="comic_images/' + this.comicsData[index].id +'/slide.jpg">'
          slideNode.appendChild(slideNodeTop);
          let slideNodeTopTitle = document.createElement('div');
          slideNodeTopTitle.classList.add('glide-slide-top-title');
          slideNode.appendChild(slideNodeTopTitle);

          let slideNodeTopTitleTransition = document.createElement('div');
          slideNodeTopTitleTransition.classList.add('sweep-background');
          slideNodeTopTitleTransition.classList.add('slide-title-clamp');
          slideNodeTopTitleTransition.innerHTML = this.comicsData[index].comicName  //height="100%" width="240"
          slideNodeTopTitle.appendChild(slideNodeTopTitleTransition);

          let slideNodeBottom = document.createElement('div');
          slideNodeBottom.classList.add('glide-slide-bottom');

          let slideNodeBottomIcons = document.createElement('div');
          slideNodeBottomIcons.classList.add('glide-slide-bottom-icons');
          this.comicsData[index].comicBadges.forEach(function(el, index, array){
          //var badgeString = document.createTextNode('<img src="images/logo_square.png">');
          let slideNodeBottomIcon = document.createElement('img');
          slideNodeBottomIcon.setAttribute('src', 'images/brand_icons/icon_'+el.comicServer+'.png');
          slideNodeBottomIcon.classList.add('glide-slide-bottom-icon');
          slideNodeBottomIcons.appendChild(slideNodeBottomIcon);
          });
          slideNodeBottom.appendChild(slideNodeBottomIcons);

          let slideNodeBottomDescription = document.createElement('div');
          slideNodeBottomDescription.classList.add('glide-slide-bottom-description');
          slideNodeBottomDescription.classList.add('slide-line-clamp');
          let slideNodeBottomDescriptionText = document.createTextNode(this.comicsData[index].comicDescription);
          slideNodeBottomDescription.appendChild(slideNodeBottomDescriptionText);
          slideNodeBottom.appendChild(slideNodeBottomDescription);

          let slideNodeBottomTags = document.createElement('div');
          slideNodeBottomTags.classList.add('glide-slide-bottom-tags');
          this.comicsData[index].comicTags.forEach(function(el, index, array){
          //var badgeString = document.createTextNode('<img src="images/logo_square.png">');
          let slideNodeBottomTag = document.createTextNode(el);
          slideNodeBottomTags.appendChild(slideNodeBottomTag);
          if (index+1 < array.length){
          let slideNodeBottomTagComma = document.createTextNode(', ');
          slideNodeBottomTags.appendChild(slideNodeBottomTagComma);
          }
          });
          slideNodeBottom.appendChild(slideNodeBottomTags);
          slideNode.appendChild(slideNodeBottom);
          document.getElementById('glide_hero_cells').appendChild(slideNode);
        }
      }, this);
    },this);
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
  }

  setFiltersDom(){
      var tagsHolder = document.querySelector('.comics-tags-holder');
      this.comicsTags.forEach(function(el, index, array){
          var tagButton = document.createElement('button');
          tagButton.setAttribute('filter', el.toLowerCase());
          tagButton.classList.add('button');
          tagButton.classList.add('comics-filters-tag-button');
          tagButton.innerHTML = el;
          tagsHolder.appendChild(tagButton);
      });
  }

  updateFiltersDom(){
      var tagsHolder = document.querySelector('.comics-tags-holder');
      this.comicsTags.forEach(function(el, index, array){
          var tagButton = document.createElement('button');
          tagButton.setAttribute('filter', el.toLowerCase());
          tagButton.classList.add('button');
          tagButton.classList.add('comics-filters-tag-button');
          tagButton.innerHTML = el;
          tagsHolder.appendChild(tagButton);
      });
  }

  setGridDom(){
    //Set Rows
    for(let i = 1; i <= this.comicsRandomizedChunked.length; i++) {
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

    //
    this.comicsRandomizedChunked.forEach(function(el, index, array){
      //console.log(el);
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
  }
  //refactor Needed
  buildItem(item){

    let itemDiv = document.createElement('div')
    itemDiv.classList.add('comics-grid-element');
    if (typeof(item) !== 'undefined'){
      itemDiv.innerHTML='<img src="comic_images/' + item.id +'/grid.jpg" class="u-max-full-width"><br /><div class="grid-title-clamp">' + item.comicName +'</div>';
    }
    return itemDiv;
  }

  setFilter(filter){
    console.log("setFilter" + filter);
  }

  bindElements(){
    let $this = this;
    let buttons = document.querySelectorAll('[filter]')
    for (var i = 0; i < buttons.length; i++) {
    //console.log(buttons[i].getAttribute('onclick'));
      buttons[i].addEventListener('click', function(e){
        let hash = window.location.hash.substring(2).split(",");
        if (hash[0] === ""){
          //console.log('First Run');
          window.location.hash = "!" + this.getAttribute('filter');
        }else{
          //console.log("HashItemIndex" + hash.indexOf(this.getAttribute('filter')));
          if(hash.indexOf(this.getAttribute('filter')) !== -1){
            //console.log('Has Value');
            hash.splice(hash.indexOf(this.getAttribute('filter')),1);
            window.location.hash = "!" + hash.toString();
          }else{
            //console.log('No Value');
            window.location.hash = window.location.hash + ',' + this.getAttribute('filter');
          }
        }
        $this.build();
      },false);
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
  document.ComicsManager = new Webring(comicsList).init();

});
