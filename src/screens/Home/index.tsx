import { FlatList, StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import Stroke from '../../assets/stroke.svg';
import Logo from '../../assets/logo.svg'
import Message from '../../assets/message.svg'
import foto from '../../assets/foto.png'
import foto2 from '../../assets/foto2.png'
import foto3 from '../../assets/foto3.png'
import foto4 from '../../assets/foto4.png'
import Point from '../../assets/points.svg'
import Heart from '../../assets/Heart.svg'
import Comment from '../../assets/Comment.svg'
import Shere from '../../assets//Share.svg'
import Bookmark from '../../assets/Bookmark.svg'
import image from '../../assets/image.png'


const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
  },
]

const Home =() => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo/>
        <View style={styles.headerOptions}>
          <Stroke/>
          <Message/>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: "100%"}}
        >
        <View style={styles.stories}>
        <FlatList
          data={DATA}
          horizontal={true}
          keyExtractor={item => item.id}
          renderItem={ ({item}) => (
            <View
              style={styles.storiesCard}
              key={item.id}>
              <Image
                source={item.photoURL}
                style={styles.storiesCardImage}/>
            </View>
          )}/>
        </View>
        <View style={styles.content}>
        <View style={styles.contentHeader}>
          <View style={styles.contentHeaderLeft}>
            <Image
              style={styles.contentHeaderLeftImage}
              source={foto}
            />
            <Text style={styles.contentHeaderLeftImageText}>Rodrigo Lucas</Text>
          </View>
          <Point/>
        </View>
          <View style={styles.contentImage}>
            <Image source={image}/>
          </View>
        </View>

        <View style={styles.contentFooter}>
          <View style={styles.contentOptions}>
          <View style={styles.contentFooterLeft}>
            <Heart />
            <Comment />
            <Shere />
          </View>
          <Bookmark/>
          </View>
          <View>
          <Text style={{color: "#FFF",}}>clislab How IOT is changing the world?</Text>
          <Text style={{color: "#FFF",}}>View all 3 comments</Text>
          <Text style={{color: "#FFF", fontSize: 10}}>3 hours ago See Translation</Text>
        </View>
       </View>

       <View style={styles.content}>
        <View style={styles.contentHeader}>
          <View style={styles.contentHeaderLeft}>
            <Image
              style={styles.contentHeaderLeftImage}
              source={foto}
            />
            <Text style={styles.contentHeaderLeftImageText}>Rodrigo Lucas</Text>
          </View>
          <Point/>
        </View>
          <View style={styles.contentImage}>
            <Image source={image}/>
          </View>
        </View>

        <View style={styles.contentFooter}>
          <View style={styles.contentOptions}>
          <View style={styles.contentFooterLeft}>
            <Heart />
            <Comment />
            <Shere />
          </View>
          <Bookmark/>
          </View>
          <View>
          <Text style={{color: "#FFF",}}>clislab How IOT is changing the world?</Text>
          <Text style={{color: "#FFF",}}>View all 3 comments</Text>
          <Text style={{color: "#FFF", fontSize: 10}}>3 hours ago See Translation</Text>
        </View>
       </View>

       <View style={styles.content}>
        <View style={styles.contentHeader}>
          <View style={styles.contentHeaderLeft}>
            <Image
              style={styles.contentHeaderLeftImage}
              source={foto}
            />
            <Text style={styles.contentHeaderLeftImageText}>Rodrigo Lucas</Text>
          </View>
          <Point/>
        </View>
          <View style={styles.contentImage}>
            <Image source={image}/>
          </View>
        </View>

        <View style={styles.contentFooter}>
          <View style={styles.contentOptions}>
          <View style={styles.contentFooterLeft}>
            <Heart />
            <Comment />
            <Shere />
          </View>
          <Bookmark/>
          </View>
          <View>
          <Text style={{color: "#FFF",}}>clislab How IOT is changing the world?</Text>
          <Text style={{color: "#FFF",}}>View all 3 comments</Text>
          <Text style={{color: "#FFF", fontSize: 10}}>3 hours ago See Translation</Text>
        </View>
       </View>

       <View style={styles.content}>
        <View style={styles.contentHeader}>
          <View style={styles.contentHeaderLeft}>
            <Image
              style={styles.contentHeaderLeftImage}
              source={foto}
            />
            <Text style={styles.contentHeaderLeftImageText}>Rodrigo Lucas</Text>
          </View>
          <Point/>
        </View>
          <View style={styles.contentImage}>
            <Image source={image}/>
          </View>
        </View>

        <View style={styles.contentFooter}>
          <View style={styles.contentOptions}>
          <View style={styles.contentFooterLeft}>
            <Heart />
            <Comment />
            <Shere />
          </View>
          <Bookmark/>
          </View>
          <View>
          <Text style={{color: "#FFF",}}>clislab How IOT is changing the world?</Text>
          <Text style={{color: "#FFF",}}>View all 3 comments</Text>
          <Text style={{color: "#FFF", fontSize: 10}}>3 hours ago See Translation</Text>
        </View>
       </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  header: {
    marginTop: 40,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  headerOptions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  stories: {
    height: 114,
    paddingLeft: 10,
    alignContent: 'center',
  },

  storiesCard: {
    marginRight: 14,
  },

  storiesCardImage: {
    width: 64,
    height: 64,
    borderWidth: 2,
    borderColor: '#F7B55A',
    borderRadius: 50,
  },

  content: {
    width: "100%",
    marginBottom: 10,
  },

  contentHeader: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },

  contentHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
  },

  contentHeaderLeftImageText: {
    color: '#FFF'
  },

  contentFooter: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  contentFooterLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  contentImage: {
    width: "100%",
    height: 355,
  },

  contentOptions: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
});


export default Home;
