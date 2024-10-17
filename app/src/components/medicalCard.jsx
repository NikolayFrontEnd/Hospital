import p from '../photos/krest.png';
import React, { useEffect, useState } from 'react';
import './book.css'; 
import '../App.css';
const FlipBook = () => {
  const [currentPagePosition, setCurrentPagePosition] = useState(0);
  const leaves = document.querySelectorAll('.leaf');

  const turnPage = (delta) => {
    let newPagePosition = currentPagePosition + delta;
    newPagePosition = Math.max(0, Math.min(newPagePosition, leaves.length));

    setCurrentPagePosition(newPagePosition);
  };

  const setPagePosition = (page, position, index) => {
    let transform = `translate3d(0, 0, ${position < 0 ? 1 : -1 * Math.abs(index)}px)`;

    if (position < 0) {
      transform += 'rotate3d(0, 1, 0, -180deg)';
      page.classList.add('turned');
    } else {
      page.classList.remove('turned');
    }

    if (page.style.transform !== transform) {
      page.style.transform = transform;
    }
  };

  useEffect(() => {
    leaves.forEach((page, index) => {
      const pageNumber = index;
      setPagePosition(page, pageNumber - currentPagePosition, index);
    });
  }, [currentPagePosition, leaves]);

  return (
    <div  className="container">   

      <div className="flipbook centered" id="flipbook">

<div class="leaf">
<div className="page front title external" style={{ backgroundColor: '#2a9d8f' }}>
			<h1>Medical card</h1>
			<em>John  Smith</em>
		</div>
        <div className="page back" style={{ backgroundColor: '#f4a261' }}>
  <div className="pageNumber">1</div>
</div>
	</div>
	<div class="leaf">
		<div class="page front" style={{backgroundColor: '#f4a261'}}>
			<div class="pageNumber">2</div>
			<h2>Contents</h2>
			<div class="contents-row">
				<div class="text"> Гастрит </div>
				<div class="spacer"></div>
				<div class="text">3</div>
			</div>
			<div class="contents-row">
				<div class="text">Грипп</div>
				<div class="spacer"></div>
				<div class="text">5</div>
			</div>
		</div>
		<div class="page back" style={{backgroundColor: '#f4a261'}}>
			<div class="pageNumber">3</div>
			<h2>Гастрит</h2>
			<p>
			</p>
		</div>
	</div>
	<div class="leaf">
		<div class="page front"  style={{backgroundColor: '#f4a261'}}>
			<div class="pageNumber">4</div>
		</div>
		<div class="page back"  style={{backgroundColor: '#f4a261'}}>
			<div class="pageNumber">5</div>
			<h2>Грипп</h2>
			<p>
			</p>
		</div>
	</div>
	<div class="leaf">
		<div class="page front" style={{backgroundColor: '#f4a261'}}>
			<div class="pageNumber">6</div>
			<p>
			</p>
		</div>
        <div className="page back external" style={{ backgroundColor: '#2a9d8f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img src={p} alt="Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
</div>

        </div>



        <div className="controls centered">
        <button className="btn "  id="prevPage" onClick={() => turnPage(-1)}>
          &lt; Previous
        </button>
        <button className="btn" id="nextPage" onClick={() => turnPage(1)}>
          Next &gt;
        </button>
      </div>
    </div>    
        
     </div>
   
  );
};

export default FlipBook;

