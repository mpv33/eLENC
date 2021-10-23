import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Route, useRouteMatch } from 'react-router-dom'
import './scrollCss.style.css'
import {
  BoldText,
  LastPageContainer,
  ProgressCircle,
  SdkButton,
} from './components'
import {SideLink} from './navigations'
const LastPage = (props) => {
  let { path, url } = useRouteMatch()
  let { value, route } = props
  console.log(value, route)
  return (
    <div style={{ display: 'flex' , backgroundColor: '#fff'}}>
      <SideLink url={url} course={route} />
      {route.map((item) => {
        return (
          <Route path={`${path}/${item.name}`}>
            <Content title={item.name} value={90} />
          </Route>
        )
      })}
      <Route path={`${path}`}></Route>
    </div>
  )
}

export default LastPage

const Content = (props) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '93vh',
        paddingLeft: '10px',
        margin: '0px',
      }}
    >
      <LastPageContainer
        border={true}
        justifyContent="center"
        alignItems="center"
        minHeight="100px"
      >
        <LastPageContainer
          justifyContent="flex-start"
          alignItems="flex-start"
          column={true}
        >
          <BoldText
            variant="subheading"
            size={16}
            color={true}
            title=" Learning notes"
          />
          <BoldText variant="h2" size={24} title={props.title} />
        </LastPageContainer>
        <ProgressCircle value={props.value} />
      </LastPageContainer>
      <Container
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          height: '76vh',
          overflowY: 'scroll',
          paddingTop: '20px',
        }}
      >
        <BoldText
          size={20}
          color={true}
          variant="h3"
          title="1. Basic Fundamentals"
        />
        <Typography
          style={{
            color: '#345B63',
            wordWrap: 'break-word',
            textAlign: 'left',
            paddingTop: '10px',
            paddingBottom: '40px',
          }}
          variant="body1"
          component="div"
        >
          {strings}
        </Typography>
      </Container>
      <LastPageContainer
        justifyContent="space-around"
        alignItems="center"
        height="50px"
        style={{
          position: 'absolute',
        }}
      >
        <SdkButton variant="outlined" title="Practice Questions" />
        <SdkButton variant="contained" title="Quiz" />
      </LastPageContainer>
    </div>
  )
}

const strings = `

thing with u Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis sagittis gravida diam, nec facilisis felis luctus at. Suspendisse
potenti. Duis eu urna at quam tristique tincidunt eu eu sapien. Donec
posuere ligula ac mollis finibus. Sed mattis dolor eget arcu mollis,
eget mattis erat bibendum. In turpis nulla, vulputate quis mi quis,
bibendum porttitor diam. Nulla sed cursus augue. Suspendisse tellus
lorem, pellentesque a purus nec, laoreet lacinia ligula. Proin nibh
lectus, scelerisque et dolor a, vestibulum fermentum est. Quisque ac
quam id velit rhoncus efficitur sed sit amet risus. Duis ut est vitae
elit scelerisque tincidunt. Nunc mollis odio velit, tempor accumsan
ante dictum at. Phasellus ut tortor lacus. Donec condimentum ultricies
dapibus. Quisque eu nibh nunc. Vestibulum tempor ipsum ac mi maximus
fermentum et blandit dolor. Integer mollis, felis nec feugiat tempor,
diam justo aliquam augue, id dictum nibh lorem placerat arcu. Donec
sem mi, pellentesque non ultrices id, congue sit amet dolor. Nunc
aliquet lacus nec scelerisque interdum. Quisque viverra fermentum
porttitor. Phasellus ut nisl vestibulum, hendrerit felis at, aliquet
ex. Etiam euismod aliquet faucibus. Sed purus arcu, tempor eget ante
varius, porttitor maximus velit. Vivamus odio metus, aliquam eget
dapibus fermentum, consectetur eget erat. Vivamus ullamcorper lacinia
elementum. Etiam fringilla sagittis aliquam. Vivamus maximus quis
velit ut fermentum. Donec nec est libero. Integer ut nulla eget lectus
mollis posuere. In hac habitasse platea dictumst. Aliquam elit libero,
placerat non quam eget, interdum fermentum turpis. Ut mi lectus,
ultrices vitae iaculis pharetra, fringilla dictum elit. Suspendisse et
massa mollis, posuere ante ac, egestas neque. Nulla elementum sodales
eros, imperdiet hendrerit justo facilisis vitae. Phasellus quis congue
est, eu fringilla odio. Aenean viverra elementum tempus. Integer felis
lacus, fringilla quis ultrices eu, tristique quis ipsum. Maecenas
eleifend sapien sodales tellus aliquam, in pellentesque massa
sagittis. Vivamus lacinia varius erat vitae volutpat. Sed faucibus
vehicula vestibulum. Pellentesque ac lacus sapien. Aliquam malesuada
neque a iaculis cursus. Curabitur ut tincidunt dolor. Sed finibus
nulla sed suscipit egestas. Aenean faucibus magna vitae velit rutrum
convallis. Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Nulla volutpat scelerisque massa,
quis sagittis diam dignissim eget. Aliquam et imperdiet eros, suscipit
lobortis metus. Cras interdum aliquet lectus vitae lacinia. Phasellus
luctus neque in sapien faucibus commodo. Sed fermentum arcu quis
vestibulum condimentum. Suspendisse porta eleifend risus viverra
maximus. Morbi egestas suscipit tortor, nec elementum elit aliquet ac.
Mauris ipsum est, aliquet nec lectus non, gravida aliquet est. Mauris
congue lobortis purus quis fringilla. Integer auctor nibh a odio
tempus tempor. Nunc imperdiet, ligula eu maximus ultrices, ex elit
dignissim ante, sed suscipit risus erat nec arcu. Quisque in consequat
felis. Nam finibus quis ex id efficitur. Orci varius natoque penatibus
et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec
interdum leo, vitae scelerisque lectus. In efficitur, arcu eget
pretium volutpat, sapien mauris interdum velit, quis fermentum metus
ex a purus. Ut venenatis orci quis libero posuere imperdiet non vel
erat. Sed quam ligula, aliquam lacinia mollis eget, sollicitudin vitae
dolor. Vestibulum at mi enim. Aliquam ante lacus, tincidunt sit amet
maximus at, venenatis sit amet nunc. Integer et metus turpis.
Phasellus euismod diam in mi dictum porttitor. Vivamus consequat est
elementum, vehicula urna id, laoreet quam. Maecenas at neque at turpis
hendrerit sodales id vitae augue. Aliquam fringilla sed sem et
scelerisque. Pellentesque fringilla urna laoreet lacinia pellentesque.
Suspendisse elementum vulputate mi at tempor. Morbi eleifend placerat
iaculis. Duis imperdiet tempor metus, non dictum nibh feugiat ac.
Morbi lacinia semper leo scelerisque convallis. Donec sed tincidunt
nisi. Donec pellentesque ullamcorper lacinia. Nam vehicula tempor
lectus, et finibus lorem sodales id. Quisque laoreet ante sit amet
bibendum dignissim. Nulla lobortis arcu turpis, quis mollis justo
posuere in. Integer libero arcu, malesuada eu neque nec, hendrerit
fermentum metus. Integer pharetra a tortor id vehicula. Nullam
consequat molestie imperdiet. Aliquam erat volutpat. Pellentesque ex
elit, auctor ultrices semper eu, bibendum sit amet justo. In blandit
dui vel quam viverra ornare. Proin scelerisque vehicula ex quis
bibendum. Vivamus tristique, nibh in molestie interdum, lectus mauris
congue felis, ac hendrerit augue ipsum ut tellus. Nam auctor nibh et
mauris scelerisque feugiat. Mauris id diam pulvinar, porttitor elit
quis, convallis nisl. Donec vel velit quis enim porta porttitor at a
neque. Aenean vitae viverra dui, vel mattis nisl. Praesent vestibulum
lectus in erat feugiat efficitur quis eget eros. Pellentesque habitant
morbi tristique senectus et netus et malesuada fames ac turpis
egestas. Vestibulum egestas varius semper. Nulla rutrum tristique
tempor. Fusce ac congue lorem, sed vulputate ligula. Vestibulum congue
condimentum ante, vel porttitor enim rutrum id. Sed tincidunt arcu ut
tortor rutrum eleifend. Integer ut lacus in est viverra posuere. Sed
in dolor metus. Cras quis metus dictum, pharetra libero nec, faucibus
sem. Etiam varius eleifend nulla nec malesuada. Interdum et malesuada
fames ac ante ipsum primis in faucibus. Aenean feugiat, urna et
consectetur rhoncus, felis est consectetur dolor, nec posuere sem
sapien in risus. Vestibulum vel augue vitae eros egestas pretium.
Donec maximus metus felis, eget imperdiet risus eleifend sed. Donec
sodales accumsan mi ac rhoncus. Pellentesque sit amet placerat magna.
Cras congue convallis orci vitae aliquam. Cras eleifend tellus ut sem
posuere, id dignissim ipsum hendrerit. Suspendisse sit amet nisi
magna. Donec consectetur, magna quis sodales ultricies, arcu est
suscipit nisl, sit amet mattis nunc eros ac massa. Nam consequat,
nulla mattis interdum lobortis, orci mauris viverra elit, sed
facilisis lectus urna sit amet augue. Mauris mattis tortor id est
tempus, at feugiat metus vestibulum. Quisque pulvinar finibus nunc, eu
laoreet quam aliquam et. Etiam elementum, elit eu porttitor hendrerit,
lorem nisl finibus dui, ac aliquam orci turpis ac odio. Nulla
facilisi. Nunc ut bibendum magna. Sed vitae lorem efficitur, euismod
lacus id, placerat nunc. Proin in congue mauris. Morbi nibh eros,
ullamcorper sit amet ex sed, laoreet maximus elit. Vestibulum egestas
laoreet ullamcorper. Sed venenatis vel ipsum vitae tincidunt.
Suspendisse consequat justo sed ex aliquam convallis. Nulla mollis
felis interdum erat semper, ac sagittis arcu finibus. Duis nec
sagittis magna. Suspendisse potenti. In hendrerit interdum lorem. Ut
dui odio, maximus vel iaculis id, sodales eget lorem. Sed ullamcorper
arcu lectus, nec vestibulum magna faucibus a. Suspendisse a leo a mi
tincidunt ullamcorper id in eros. Vestibulum ante ipsum primis in
faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum
elementum ipsum non neque volutpat rutrum. Ut ut metus diam. Morbi
varius rutrum arcu, nec interdum magna ullamcorper sed. Pellentesque
consequat massa vitae elit eleifend lacinia. Nunc maximus volutpat
sapien sed viverra. Cras nisi purus, efficitur et ante nec, finibus
sagittis nibh. Nullam at arcu ac ipsum tincidunt porttitor vitae ac
metus. Fusce purus diam, vehicula ut tempor eu, suscipit eu arcu. Nunc
hendrerit enim ac justo porttitor aliquet. Ut fringilla iaculis magna,
non posuere erat. Sed ut ligula quam. Donec felis magna, volutpat ac
posuere vitae, condimentum in nibh. Aenean non ex odio. Nullam mi
purus, molestie quis lobortis at, convallis non urna. Nunc ut suscipit
metus. Aliquam sed cursus dui, nec ornare urna. Pellentesque bibendum,
ex et dapibus ultricies, dui justo placerat urna, eu elementum eros
urna faucibus dui. Suspendisse convallis tincidunt eleifend. Cras
mauris urna, tincidunt fringilla nisl in, rhoncus commodo urna. In ac
turpis a est vestibulum interdum nec eget elit. Proin volutpat commodo
cursus. Aliquam erat volutpat. Vestibulum id dui ultrices, fermentum
velit at, pharetra ex. Cras sed maximus enim. Aliquam risus leo,
finibus vitae pellentesque eu, ornare sit amet metus. Sed ac odio
diam. Vivamus sollicitudin urna vel tristique vestibulum. Nam quis
porta purus. Vivamus auctor lorem non ipsum convallis, at facilisis
tellus volutpat. Cras sollicitudin et eros et euismod. Fusce at dui
condimentum, tincidunt lorem in, lacinia leo. Nunc molestie leo a
suscipit lobortis. Suspendisse imperdiet mattis sollicitudin. Nunc nec
dui sed dui pellentesque fermentum vel quis dolor. Pellentesque eu
urna luctus, fermentum metus nec, venenatis justo. Curabitur venenatis
libero at purus semper, vel suscipit ipsum efficitur. Donec tempus
quam risus, quis feugiat turpis vehicula at. Sed ut dui quam. Mauris
volutpat metus eu laoreet ultricies. Donec ipsum nibh, rhoncus a
mollis sed, suscipit non nisi. Vestibulum bibendum malesuada ex eu
faucibus. Fusce elit est, semper et urna vitae, laoreet viverra
lectus. Curabitur ut posuere felis. Proin aliquet est sed tortor
pellentesque aliquam. Quisque pretium id orci nec ultricies. Aenean
sed magna in metus pharetra dictum ut quis neque. In hac habitasse
platea dictumst. Sed nibh nulla, blandit fermentum ipsum et, feugiat
consectetur eros. Nullam sit amet tempus leo. Nulla eu placerat nunc.
Pellentesque augue libero, tristique vel ante sed, malesuada posuere
nibh. Proin at lobortis ligula. Nunc feugiat lacus metus, non euismod
eros commodo non. Ut molestie mi eros, quis efficitur neque cursus
sed. Cras nec est tristique, porttitor tortor nec, mattis dui. Nullam
consequat nisi ut ultricies efficitur. Suspendisse venenatis est id
bibendum dignissim. Duis ut mi dui. Etiam at mi blandit, egestas nunc
quis, ullamcorper nisi. Sed pulvinar lacinia euismod. Aliquam
sagittis, dui a fringilla dignissim, elit augue suscipit magna, ut
tempus urna tortor nec felis. Donec ut purus nisi. Nam eu odio
imperdiet, convallis leo ut, pellentesque est. Donec sit amet mi orci.
Suspendisse nec turpis venenatis, aliquet nisl ut, porta mi. Sed
gravida ante dolor, nec interdum turpis pellentesque sed. Orci varius
natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus. Aenean sit amet facilisis mauris. Nam sagittis, odio quis mollis
porttitor, justo odio sollicitudin nulla, vitae auctor nulla magna eu
lorem. Nullam vel mauris quis neque venenatis pellentesque. Sed id
malesuada dui. Suspendisse dolor ante, maximus sit amet velit vel,
commodo rhoncus urna. Aliquam efficitur sagittis sem et dignissim.
Nulla dignissim sem tellus, at elementum mauris pellentesque sit amet.
Vivamus vel placerat felis, id consequat nunc. Suspendisse feugiat
dictum ipsum. Fusce vitae faucibus augue. Vestibulum egestas lectus
est, nec auctor arcu placerat ac. Morbi sed enim malesuada, rutrum
arcu in, aliquam dui. Vestibulum ante ipsum primis in faucibus orci
luctus et ultrices posuere cubilia curae; Etiam interdum eu ipsum nec
convallis. Etiam sollicitudin finibus velit, sit amet pretium ligula
porta sit amet. Quisque interdum tellus eu nisi tincidunt tristique.
Aliquam erat volutpat. Duis sit amet luctus sem, eu tempor eros.
Vivamus vulputate sapien est, nec porttitor risus consectetur eu. Sed
lectus massa, fermentum vel facilisis sed, rhoncus a est. In vitae
ultrices purus. Integer mattis venenatis mollis. Praesent velit
ligula, egestas vitae nulla ut, vestibulum suscipit turpis. Cras
dictum sollicitudin sollicitudin. Mauris orci turpis, pellentesque non
nisl vel, mollis maximus diam. Sed blandit velit quam, vitae hendrerit
ex tincidunt vel. Suspendisse potenti. Mauris sed sollicitudin mauris.
Suspendisse ornare enim magna, sit amet eleifend massa ullamcorper et.
Ut venenatis eros vel pulvinar scelerisque. Phasellus tempus enim
diam, quis placerat mi porta et. Nulla ultrices egestas nulla, at
sodales ipsum fermentum ut. Quisque augue velit, gravida non commodo
at, laoreet at dui. In vitae semper risus, ac ultricies justo. Etiam
dui ligula, elementum id suscipit egestas, sollicitudin quis dolor.
Donec placerat, augue non interdum consectetur, urna ipsum tincidunt
nibh, et blandit ante purus ut magna. Nulla eget eros in eros
porttitor aliquam et et mauris. Nullam fringilla, mi sed vestibulum
sollicitudin, elit risus placerat ipsum, sit amet auctor erat metus
sed velit. Sed eget tristique nisl. Sed a semper dolor, et semper
nibh. Mauris convallis placerat diam sit amet varius.
`
