﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.111
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Расчет.
    /// </summary>
    // *** Start programmer edit section *** (Расчет CustomAttributes)

    // *** End programmer edit section *** (Расчет CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РасчетE", new string[0])]
    [View("РасчетL", new string[0])]
    public class Расчет : ICSSoft.STORMNET.DataObject
    {
        
        private int fIDрасчета;
        
        private int fIDорганизации;
        
        private int fIDсотрудника;
        
        private string fПериод_болезни;
        
        private IIS.111.Организация fОрганизация;
        
        private IIS.111.Сотрудник fСотрудник;
        
        // *** Start programmer edit section *** (Расчет CustomMembers)

        // *** End programmer edit section *** (Расчет CustomMembers)

        
        /// <summary>
        /// IDорганизации.
        /// </summary>
        // *** Start programmer edit section *** (Расчет.IDорганизации CustomAttributes)

        // *** End programmer edit section *** (Расчет.IDорганизации CustomAttributes)
        public virtual int IDорганизации
        {
            get
            {
                // *** Start programmer edit section *** (Расчет.IDорганизации Get start)

                // *** End programmer edit section *** (Расчет.IDорганизации Get start)
                int result = this.fIDорганизации;
                // *** Start programmer edit section *** (Расчет.IDорганизации Get end)

                // *** End programmer edit section *** (Расчет.IDорганизации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Расчет.IDорганизации Set start)

                // *** End programmer edit section *** (Расчет.IDорганизации Set start)
                this.fIDорганизации = value;
                // *** Start programmer edit section *** (Расчет.IDорганизации Set end)

                // *** End programmer edit section *** (Расчет.IDорганизации Set end)
            }
        }
        
        /// <summary>
        /// IDрасчета.
        /// </summary>
        // *** Start programmer edit section *** (Расчет.IDрасчета CustomAttributes)

        // *** End programmer edit section *** (Расчет.IDрасчета CustomAttributes)
        public virtual int IDрасчета
        {
            get
            {
                // *** Start programmer edit section *** (Расчет.IDрасчета Get start)

                // *** End programmer edit section *** (Расчет.IDрасчета Get start)
                int result = this.fIDрасчета;
                // *** Start programmer edit section *** (Расчет.IDрасчета Get end)

                // *** End programmer edit section *** (Расчет.IDрасчета Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Расчет.IDрасчета Set start)

                // *** End programmer edit section *** (Расчет.IDрасчета Set start)
                this.fIDрасчета = value;
                // *** Start programmer edit section *** (Расчет.IDрасчета Set end)

                // *** End programmer edit section *** (Расчет.IDрасчета Set end)
            }
        }
        
        /// <summary>
        /// IDсотрудника.
        /// </summary>
        // *** Start programmer edit section *** (Расчет.IDсотрудника CustomAttributes)

        // *** End programmer edit section *** (Расчет.IDсотрудника CustomAttributes)
        public virtual int IDсотрудника
        {
            get
            {
                // *** Start programmer edit section *** (Расчет.IDсотрудника Get start)

                // *** End programmer edit section *** (Расчет.IDсотрудника Get start)
                int result = this.fIDсотрудника;
                // *** Start programmer edit section *** (Расчет.IDсотрудника Get end)

                // *** End programmer edit section *** (Расчет.IDсотрудника Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Расчет.IDсотрудника Set start)

                // *** End programmer edit section *** (Расчет.IDсотрудника Set start)
                this.fIDсотрудника = value;
                // *** Start programmer edit section *** (Расчет.IDсотрудника Set end)

                // *** End programmer edit section *** (Расчет.IDсотрудника Set end)
            }
        }
        
        /// <summary>
        /// Период_болезни.
        /// </summary>
        // *** Start programmer edit section *** (Расчет.Период_болезни CustomAttributes)

        // *** End programmer edit section *** (Расчет.Период_болезни CustomAttributes)
        [StrLen(255)]
        public virtual string Период_болезни
        {
            get
            {
                // *** Start programmer edit section *** (Расчет.Период_болезни Get start)

                // *** End programmer edit section *** (Расчет.Период_болезни Get start)
                string result = this.fПериод_болезни;
                // *** Start programmer edit section *** (Расчет.Период_болезни Get end)

                // *** End programmer edit section *** (Расчет.Период_болезни Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Расчет.Период_болезни Set start)

                // *** End programmer edit section *** (Расчет.Период_болезни Set start)
                this.fПериод_болезни = value;
                // *** Start programmer edit section *** (Расчет.Период_болезни Set end)

                // *** End programmer edit section *** (Расчет.Период_болезни Set end)
            }
        }
        
        /// <summary>
        /// Расчет.
        /// </summary>
        // *** Start programmer edit section *** (Расчет.Организация CustomAttributes)

        // *** End programmer edit section *** (Расчет.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.111.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (Расчет.Организация Get start)

                // *** End programmer edit section *** (Расчет.Организация Get start)
                IIS.111.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (Расчет.Организация Get end)

                // *** End programmer edit section *** (Расчет.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Расчет.Организация Set start)

                // *** End programmer edit section *** (Расчет.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (Расчет.Организация Set end)

                // *** End programmer edit section *** (Расчет.Организация Set end)
            }
        }
        
        /// <summary>
        /// Расчет.
        /// </summary>
        // *** Start programmer edit section *** (Расчет.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (Расчет.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.111.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (Расчет.Сотрудник Get start)

                // *** End programmer edit section *** (Расчет.Сотрудник Get start)
                IIS.111.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (Расчет.Сотрудник Get end)

                // *** End programmer edit section *** (Расчет.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Расчет.Сотрудник Set start)

                // *** End programmer edit section *** (Расчет.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (Расчет.Сотрудник Set end)

                // *** End programmer edit section *** (Расчет.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РасчетE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетE", typeof(IIS.111.Расчет));
                }
            }
            
            /// <summary>
            /// "РасчетL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетL", typeof(IIS.111.Расчет));
                }
            }
        }
    }
}
