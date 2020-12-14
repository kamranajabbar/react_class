function Dinner(probs) {
    return (
          <div>
              <p>Dear visitor, we are happy to announced that your day <b>{probs.Day}</b> menu for dinner will be <b>{probs.dishName}</b> and in deserts <b>{probs.desertsName}</b> will be served.</p>
          </div>
      );
  }
  
  export default Dinner;
  