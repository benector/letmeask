import styled from 'styled-components';

export const RoomLayoutContainer = styled.div`
    
    height:100%;
    display:grid;
    grid-template-rows: 1fr 1fr 1fr;


    .room-header{
      margin: 16px 0;
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
      align-items:center;
      justify-content:center;
      align-self: start;


      @media(max-width:768px){
        display:block;
        button {
          margin: 0.5em;
        }
      }
    }

    .room-info {
    }  

    .room-title {
      display: flex;
      align-items: center;
      flex-wrap:wrap;

        h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          color: #29292e;
          margin: 0;
          padding: 0.5em;
        }

        span {
          margin-left: 16px;
          background: #e559f9;
          border-radius: 9999px;
          padding: 8px 16px;
          color: #FFF;
          font-weight: 500;
          font-size: 14px;
        }
        
    }

    .end-room{
      display:flex;
      width:120px;
      justify-self:end;

      button{
        width:130px;
      }
    }
    

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
      }
    }
  
 

  .question-list {
    margin-top: 1em;
    margin-bottom: 1em;
    grid-row-start: 2;
    grid-row-end: 4;


      .user-info {
        display: flex;
        align-items: center;
    
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
    
        span {
          margin-left: 8px;
          color: #737380;
          font-size: 14px;
        }   
      } 

      .no-content{
        display:flex;
        justify-content:center;
      }
  }
  
  
    
` 

