import axios from 'axios';

export default axios.create({
    
baseURL : 'https://api.yelp.com/v3/businesses',
headers: {
    Authorization :
    'Bearer jm8E1mYsEzDUfnI2r2r93RdcKazUewZ-UXG6s9YngfdU5l2SY6anj4BpOfWq4QR2IjSIMtPExseKA2LqHXyh4MlcQICcS5fjExeBcdb_E45ifQTfU0z0guQLlbbPZHYx'
}

});

