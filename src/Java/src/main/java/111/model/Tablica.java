package 111.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 111.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Таблица
 */
@Entity(name = "IIS111Таблица")
@Table(schema = "public", name = "Таблица")
public class Tablica {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Заработок_год")
    private Integer заработок_год;

    @Column(name = "Срзаработок")
    private Integer срзаработок;

    @Column(name = "Пособие")
    private Integer пособие;

    @Column(name = "IDрасчета")
    private Integer idрасчета;

    @Column(name = "IDорганизации")
    private Integer idорганизации;

    @Column(name = "IDсотрудника")
    private Integer idсотрудника;

    @Column(name = "Период_болезни")
    private String период_болезни;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;


    public Tablica() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getЗаработок_год() {
      return заработок_год;
    }

    public void setЗаработок_год(Integer заработок_год) {
      this.заработок_год = заработок_год;
    }

    public Integer getСрзаработок() {
      return срзаработок;
    }

    public void setСрзаработок(Integer срзаработок) {
      this.срзаработок = срзаработок;
    }

    public Integer getПособие() {
      return пособие;
    }

    public void setПособие(Integer пособие) {
      this.пособие = пособие;
    }

    public Integer getIDрасчета() {
      return idрасчета;
    }

    public void setIDрасчета(Integer idрасчета) {
      this.idрасчета = idрасчета;
    }

    public Integer getIDорганизации() {
      return idорганизации;
    }

    public void setIDорганизации(Integer idорганизации) {
      this.idорганизации = idорганизации;
    }

    public Integer getIDсотрудника() {
      return idсотрудника;
    }

    public void setIDсотрудника(Integer idсотрудника) {
      this.idсотрудника = idсотрудника;
    }

    public String getПериод_болезни() {
      return период_болезни;
    }

    public void setПериод_болезни(String период_болезни) {
      this.период_болезни = период_болезни;
    }


}