import styles from "@/styles/Index.module.css";
import SearchScreen from "./search-screen";

const Index: React.FC = () => {
  return (
    <div className={styles.indexContainer}>
      <SearchScreen />
    </div>
  );
};

export default Index;
