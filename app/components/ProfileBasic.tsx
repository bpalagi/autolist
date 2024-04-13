import { Timeline } from 'react-twitter-widgets'
import "./styles.css";

interface prop { profileInput: string; };

const ProfileBasic: React.FC<prop> = ( {profileInput} ) => {
  return (
    <Timeline 
      dataSource={{
        sourceType: "profile",
        screenName: profileInput
        }}
      options={{
          height: "800",
          width: "500"
        }}
    /> 
  )
}

export default ProfileBasic