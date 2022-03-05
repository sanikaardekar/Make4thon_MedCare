import { Grid, Typography, Button } from "@mui/material";
import yoga1 from "../../assets/yoga1.svg";
import yoga2 from "../../assets/yoga2.jpg";
import yoga3 from "../../assets/yoga3.svg";
import { useTranslation, Trans } from "react-i18next";


const lngs = {
  en: { nativeName: "English" },
  hi: { nativeName: "Hindi" },
};
export default function Yoga() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
        <Grid item sm={6} md={8} mt={2} style={{backgroundColor: "#49AB94", display:"flex", justifyContent:"center", alignItems:"center", width: "250px", height: "90px"}}><Typography variant="h5" style={{ textAlign: "center" }}>
        हिंदी में पढ़ें{" "}
        {Object.keys(lngs).map((lng) => (
            <Button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal', color: "#B10A47" }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </Button>
          ))}
     </Typography></Grid>
        </div>
        <Grid
          item
          sm={6}
          md={8}
          data-aos="fade-up-left"
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <div>
            <Grid item sm={12} md={8} mt={4}>
              <Typography variant="h3">{t('description.part2')}</Typography>
              <Typography variantMapping="p">
                <Trans i18nKey="description.part1">
                  Commonly known as “the tree pose”, this asana is very basic
                  and helps improve your sense of self and centres your body and
                  mind.
                </Trans>
              </Typography>
              <br />
              <Typography variant="h5">{t('description.part3')}</Typography>
              <Typography variantMapping="p">
                <ul>
                  <li>
                  {t('description.part4')}
                  </li>

                  <li>{t('description.part5')}</li>
                  <li>
                  {t('description.part6')}
                  </li>
                </ul>
              </Typography>
            </Grid>
          </div>
          <div>
            <Grid item sm={12} md={4}>
              <img
                src={yoga1}
                alt="img1"
                style={{ height: "340px", width: "400px" }}
              />
            </Grid>
          </div>
        </Grid>
        <Grid
          item
          sm={6}
          md={8}
          data-aos="fade-up-right"
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <div>
            <Grid item sm={12} md={8} mt={4}>
              <Typography variant="h3">{t('description.part7')}</Typography>
              <Typography variantMapping="p">
              {t('description.part8')}
              </Typography>
              <br />
              <Typography variant="h5">{t('description.part3')}</Typography>
              <Typography variantMapping="p">
                <ul>
                  <li>
                  {t('description.part9')}
                  </li>

                  <li>
                  {t('description.part10')}
                  </li>
                  <li>{t('description.part11')}</li>
                  <li>{t('description.part12')}</li>
                </ul>
              </Typography>
            </Grid>
          </div>
          <div>
            <Grid item sm={6} md={4}>
              <img
                src={yoga2}
                alt="img2"
                style={{ height: "340px", width: "400px" }}
              />
            </Grid>
          </div>
        </Grid>
        <Grid
          item
          sm={6}
          md={8}
          data-aos="fade-up"
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <div>
            <Grid item sm={6} md={8} mt={4}>
              <Typography variant="h3">{t('description.part13')}</Typography>
              <Typography variantMapping="p">
              {t('description.part14')}
              </Typography>
              <br />
              <Typography variant="h5">{t('description.part3')}</Typography>
              <Typography variantMapping="p">
                <ul>
                  <li>
                  {t('description.part15')}
                  </li>

                  <li>
                  {t('description.part16')}
                  </li>
                  <li>
                  {t('description.part17')}
                  </li>
                  <li>{t('description.part18')}</li>
                </ul>
              </Typography>
            </Grid>
          </div>
          <div>
            <Grid item sm={6} md={4}>
              <img
                src={yoga3}
                alt="img2"
                style={{ height: "340px", width: "400px" }}
              />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
