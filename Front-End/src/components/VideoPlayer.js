import styles from './VideoPlayer.module.css'

function VideoPlayer({src, titulo}) {
  return (
    <div className={styles.container}>
        <video
        className={styles.video}
        src={src}
        autoPlay
        loop
        muted
        >
        Seu navegador não suporta vídeos HTML5.
      </video>
      <h1 className={styles.titulo}>{titulo}</h1>
    </div>
  );
}

export default VideoPlayer;
